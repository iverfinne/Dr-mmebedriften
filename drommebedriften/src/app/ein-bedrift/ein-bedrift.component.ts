import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Bedrift, BedrifterTreffSokVisning } from '../type-oversikt';
import { DatabaseService } from '../ser/database.service';
import { Router, NavigationEnd } from '@angular/router';
import { einBedrift } from '../angular-animation';
import { GlobaleLyttararService } from '../ser/globale-lyttarar.service';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './ein-bedrift.component.html',
  styleUrls: ['./ein-bedrift.component.scss'],
  animations: [einBedrift]
})
export class EinBedriftComponent implements OnInit, OnDestroy {
  einBedrift: Bedrift;
  currBedriftRuterLink;

  containerStatus: 'av' | 'pa' = 'pa';

  einBedriftCurrentGoogleFormLink: string | SafeResourceUrl;

  abonnement0: Subscription;
  abonnement1: Subscription;
  abonnement2: Subscription;

  alleBedrifterSomCurrVises: BedrifterTreffSokVisning[];

  constructor(
    private ruter: Router,
    private databaseService: DatabaseService,
    private globaleLyttararService: GlobaleLyttararService
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

    return nesteIndeks;
  }

  byttBedriftForCurrVisning(type: 'neste' | 'forrige'): void {
    const currLinkIndex = this.hentCurrIndexForVisningsArray();

    if (currLinkIndex > -1) {
      const framtidigeIndex = this.hentFramtidigeBedrift(type, currLinkIndex);

      // Bytt side
      this.ruter.navigateByUrl(`/bedrifter/(bedrift:${
        this.alleBedrifterSomCurrVises[framtidigeIndex].bedriftData.ruterLink
        })`);

      this.einBedrift = this.alleBedrifterSomCurrVises[framtidigeIndex].bedriftData;
    }
  }

  lukkPanel(): void {
    this.containerStatus = 'av';

    setTimeout(() => {
      this.ruter.navigateByUrl('[\'\', { outlets: { bedrift: null } }]');
    }, 300);
  }

}
