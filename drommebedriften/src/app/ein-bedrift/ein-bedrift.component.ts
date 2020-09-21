import { Component, OnInit, OnDestroy } from '@angular/core';
import { Bedrift, BedrifterTreffSokVisning } from '../type-oversikt';
import { DatabaseService } from '../ser/database.service';
import { Router, NavigationEnd } from '@angular/router';
import { einBedrift } from '../angular-animation';
import { GlobaleLyttararService } from '../ser/globale-lyttarar.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription, timer } from 'rxjs';
import { GoogleAnalyticsService } from '../ser/google-analytics.service';

@Component({
  templateUrl: './ein-bedrift.component.html',
  styleUrls: ['./ein-bedrift.component.scss'],
  animations: [einBedrift]
})
export class EinBedriftComponent implements OnInit, OnDestroy {
  einBedrift: Bedrift;
  currBedriftRuterLink;

  currTidBrukarPaaSida = 0;

  containerStatus: 'av' | 'pa' = 'pa';

  einBedriftCurrentGoogleFormLink: string | SafeResourceUrl;

  abonnement0: Subscription;
  abonnement1: Subscription;
  abonnement2: Subscription;
  abonnement3: Subscription;

  alleBedrifterSomCurrVises: BedrifterTreffSokVisning[];

  constructor(
    private ruter: Router,
    private databaseService: DatabaseService,
    private globaleLyttararService: GlobaleLyttararService,
    public domSanitizer: DomSanitizer,
    public analyticsFunksjonar: GoogleAnalyticsService
  ) {
    this.abonnement2 = this.ruter.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let bigPp = event.url.split('bedrift:')[1];
        bigPp = bigPp.slice(0, bigPp.length - 1);

        this.currBedriftRuterLink = bigPp;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.abonnement0) { this.abonnement0.unsubscribe(); }
    if (this.abonnement1) { this.abonnement1.unsubscribe(); }
    if (this.abonnement2) { this.abonnement2.unsubscribe(); }

    this.stoppTimerForASjekkeKorLengeEinBrukarErPaaSida();

    // Vask opp litt til...
    this.globaleLyttararService.einBedriftTastPress.next(null);
  }

  async ngOnInit(): Promise<void> {
    this.einBedrift = await this.databaseService.hentEinBedrift(this.currBedriftRuterLink);

    this.abonnement0 = this.globaleLyttararService.einBedriftTastPress.subscribe(key => {
      switch (key) {
        case 'ArrowLeft':
          this.byttBedriftForCurrVisning('forrige');
          break;
        case 'ArrowRight':
          this.byttBedriftForCurrVisning('neste');
          break;

        default:
          break;
      }
    });

    this.abonnement1 = this.globaleLyttararService.bedrifterSomCurrVises.subscribe(bedrifter => {
      this.alleBedrifterSomCurrVises = bedrifter;
    });

    this.startTimerForASjekkeKorLengeEinBrukarErPaaSida();
  }

  opneUndersokelse(googleFormLink: string | SafeResourceUrl): void {
    this.einBedriftCurrentGoogleFormLink = googleFormLink;
    this.globaleLyttararService.animasjonsStatusGoogleFormEinBedrift.next('pa');
  }

  hentCurrIndexForVisningsArray(): number {
    return this.alleBedrifterSomCurrVises.findIndex(v => v.bedriftData.ruterLink === this.currBedriftRuterLink);
  }

  hentFramtidigeBedrift(type: 'neste' | 'forrige', currLinkIndex: number): number {
    let nesteIndeks = currLinkIndex;

    if (type === 'neste') {
      // Neste Bedrift
      nesteIndeks = currLinkIndex + 1;
      if (nesteIndeks > this.alleBedrifterSomCurrVises.length - 1) { nesteIndeks = 0; }
    } else if (type === 'forrige') {
      // Forrige Bedrift
      nesteIndeks = currLinkIndex - 1;
      if (nesteIndeks < 0) { nesteIndeks = this.alleBedrifterSomCurrVises.length - 1; }
    }

    // Visst falsk-flis...
    if (this.alleBedrifterSomCurrVises[nesteIndeks].bedriftData.namn === '--falsk--') {
      // Hopp over..
      if (currLinkIndex === this.alleBedrifterSomCurrVises.length - 2) {
        nesteIndeks = 0;
      } else if (currLinkIndex === 0) {
        nesteIndeks = nesteIndeks - 1;
      }
    }

    return nesteIndeks;
  }

  byttBedriftForCurrVisning(type: 'neste' | 'forrige'): void {
    const currLinkIndex = this.hentCurrIndexForVisningsArray();

    if (currLinkIndex > -1) {
      this.stoppTimerForASjekkeKorLengeEinBrukarErPaaSida();

      const framtidigeIndex = this.hentFramtidigeBedrift(type, currLinkIndex);

      // Bytt side
      this.ruter.navigateByUrl(`/bedrifter/(bedrift:${this.alleBedrifterSomCurrVises[framtidigeIndex].bedriftData.ruterLink
        })`);

      this.einBedrift = this.alleBedrifterSomCurrVises[framtidigeIndex].bedriftData;

      this.startTimerForASjekkeKorLengeEinBrukarErPaaSida();
    }
  }

  kanskjeHentUtFramsidebiletePosisjonY(posisjon: string): string | null {
    const posisjoner = posisjon.split(' ');
    if (posisjoner && posisjoner.length === 2) {
      return posisjoner[1];
    }

    return null;
  }

  lukkPanel(): void {
    this.containerStatus = 'av';

    setTimeout(() => {
      this.ruter.navigateByUrl(`'',{outlets:{bedrift:null}}]`);
    }, 300);
  }

  //// /
  // For Google Analyse...
  startTimerForASjekkeKorLengeEinBrukarErPaaSida(): void {
    /* this.abonnement3 = timer(0, 100).subscribe(x => { this.currTidBrukarPaaSida = x * 100; }); */
  }
  stoppTimerForASjekkeKorLengeEinBrukarErPaaSida(): void {
    // Send...
    /* this.analyticsFunksjonar.EinBedrift_korLengeEinBrukarVarPaSida(this.einBedrift.namn, this.currTidBrukarPaaSida);

    if (this.abonnement3) { this.abonnement3.unsubscribe(); }
    this.currTidBrukarPaaSida = 0; */
  }

}
