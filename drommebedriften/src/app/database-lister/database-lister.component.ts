import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { Bedrift, BedrifterTreffSokVisning, BedriftSokMengdeTreff } from '../type-oversikt';
import { DatabaseService } from '../ser/database.service';
import { TypeVaktService } from '../ser/type-vakt.service';

import { bedrifter, bedriftFlis } from '../angular-animation';
import { GlobaleLyttararService } from '../ser/globale-lyttarar.service';

@Component({
  selector: 'app-database-lister',
  templateUrl: './database-lister.component.html',
  styleUrls: ['./database-lister.component.scss'],
  animations: [
    bedrifter,
    bedriftFlis
  ]
})
export class DatabaseListerComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('vi0', { static: true }) vi0: ElementRef<HTMLElement>;
  @ViewChild('vi1', { static: true }) vi1: ElementRef<HTMLElement>;

  alleBedrifter: Bedrift[] = [];
  alleBedrifterVisning: BedrifterTreffSokVisning[] = this.fullVisningDatabaseKonverterer(this.alleBedrifter);
  bedrifterVisningsType: 'comfy' | 'liste' = 'comfy';
  startEitNyttSok;

  sokVerdi = '';

  ioObservers: {
    io: IntersectionObserver,
    targetElmt: HTMLElement | Element
  }[] = [];
  length: any;

  constructor(
    private databaseService: DatabaseService,
    private typeVakt: TypeVaktService,
    private globaleLyttararService: GlobaleLyttararService
  ) { }

  async ngOnInit(): Promise<void> {
    this.alleBedrifter = await this.databaseService.hentAlleBedrifter();
    this.settBedrifterVisningsData(this.fullVisningDatabaseKonverterer(this.alleBedrifter));

    const visningsTypeBedrifter = Number(window.localStorage.getItem('visningsTypeBedrifter'));
    if (visningsTypeBedrifter) {
      if (visningsTypeBedrifter === 0) { this.visning(this.vi0.nativeElement, 0); } else {
        this.visning(this.vi1.nativeElement, 1);
      }
    }
  }

  ngOnDestroy(): void { this.ioObservers.forEach(v => { v.io.disconnect(); }); }

  ngAfterViewInit(): void { this.leggTilNyLazyVisningBilete(); }

  private async lazyLastInnBilete(bileteElmt: HTMLElement | Element): Promise<void> {
    const io = new IntersectionObserver((entries, observer) => {
      for (const entry of entries) {
        // /
        // Sett inn bakgrunnsbilete (last inn...)
        if (entry.isIntersecting) {
          const element = entry.target.firstElementChild.firstElementChild;

          // Sett inn bilete
          if (this.typeVakt.erEitHTMLElement(element)) {
            const evtLogoLink = element.getAttribute('data-logourl');

            if (evtLogoLink) { element.style.backgroundImage = evtLogoLink; }
          }
        }
      }
    });

    this.ioObservers.push({ io, targetElmt: bileteElmt });
    io.observe(bileteElmt);
  }
  leggTilNyLazyVisningBilete(): void {
    this.ioObservers.forEach(v => { v.io.disconnect(); });
    this.ioObservers = [];

    // Sett på lazy innlasting av bilete
    setTimeout(() => {
      const alleFlisElementer =
        document.querySelectorAll('div > .flis').length > 0 ?
          document.querySelectorAll('div > .flis') :
          document.querySelectorAll('div > .flis-liste');

      alleFlisElementer.forEach(flisElement => {
        this.lazyLastInnBilete(flisElement);
      });
    }, 430);
  }

  visning(visningsElement: HTMLElement, type: 0 | 1): void {
    const parent = visningsElement.parentElement;

    for (const childValue in parent.children) {
      if (childValue && !isNaN(Number(childValue))) {
        const child = parent.children[childValue];

        // Deaktiver alle
        child.classList.remove('aktiv');
      }
    }

    // Aktiver
    visningsElement.classList.add('aktiv');

    if (type === 0) {
      this.bedrifterVisningsType = 'comfy';
      window.localStorage.setItem('visningsTypeBedrifter', '0');
    } else {
      this.bedrifterVisningsType = 'liste';
      window.localStorage.setItem('visningsTypeBedrifter', '1');
    }
  }

  ordSplitter(ord: string, maksOrdLengde: number): string[] {
    const splittetOrd = [];

    if (ord.length > maksOrdLengde) {
      let i = 1;
      let currOrdOppbygget = '';
      for (const bokstav of ord) {
        currOrdOppbygget += bokstav;
        if (i % maksOrdLengde === 0) { splittetOrd.push(currOrdOppbygget); currOrdOppbygget = ''; }

        i++;
      }
    }

    return splittetOrd;
  }

  fullVisningDatabaseKonverterer(database: Bedrift[]): BedrifterTreffSokVisning[] {
    const nyArray: BedrifterTreffSokVisning[] = [];

    for (const data of database) {
      nyArray.push({ bedriftData: data, antalTreff: -1 });
    }

    return nyArray;
  }
  visningDatabaseKonverterer(
    filtrertDatabaseSok: Bedrift[],
    einBedriftMengdeTreff: BedriftSokMengdeTreff
  ): BedrifterTreffSokVisning | null {
    const currNamn = einBedriftMengdeTreff.namn.toLocaleLowerCase();
    const nyData: BedrifterTreffSokVisning = { bedriftData: null, antalTreff: 0 };

    if (filtrertDatabaseSok.some(v => v.namn.toLocaleLowerCase() === currNamn)) {
      nyData.bedriftData = filtrertDatabaseSok.filter(v => v.namn.toLocaleLowerCase() === currNamn)[0];
      nyData.antalTreff = einBedriftMengdeTreff.antalTreff;
    }

    if (nyData.bedriftData) { return nyData; } return null;
  }

  settBedrifterVisningsData(data: BedrifterTreffSokVisning[]): void {
    this.alleBedrifterVisning = data; this.globaleLyttararService.bedrifterSomCurrVises.next(data);
  }

  async enkelSokMotor(database: Bedrift[], sokeOrd: string | null): Promise<BedrifterTreffSokVisning[] | null> {
    if (sokeOrd && sokeOrd.length > 1) {
      const sokeOrdFinale = sokeOrd.toLocaleLowerCase().trim();

      // Prøv å finn eit treff
      const alleSoksTreff: BedrifterTreffSokVisning[] = await new Promise(async resolve => {
        const mengdeTreffForEinBedrifter: BedriftSokMengdeTreff[] = [];

        // Filtrer ut dei dataene brukar vil ha frå database...
        const filtrertDatabaseSok = database.filter(einBedrift => {
          /**
           * Sjekk om søkeord er treff for namn splitta i array på 4, 3, 2
           *
           * Om treff for kven som helst, så vis resultater for match --> Lagre alle treff i ein midlertidig array
          **/
          const namn = einBedrift.namn.toLocaleLowerCase();

          // Splitt namn til sæks-ord
          const arrSplittetOrd: string[][] = [
            this.ordSplitter(namn, 4),
            this.ordSplitter(namn, 3),
            this.ordSplitter(namn, 2)
          ];

          // Søk
          let antalTreff = 0;
          let erEitTreff = false;
          for (const splittetOrd of arrSplittetOrd) {
            splittetOrd.forEach(ord => {
              if (sokeOrdFinale.indexOf(ord) > -1) {
                antalTreff++; erEitTreff = true;
              }
            });
          }

          mengdeTreffForEinBedrifter.push({ namn, antalTreff });
          return erEitTreff;
        });

        if (filtrertDatabaseSok) {
          // Lag til resultater for visning...
          const nyDatabaseForSok: BedrifterTreffSokVisning[] = [];
          for (const eitTreffMengdeBedrift of mengdeTreffForEinBedrifter) {
            const kanskjeTreff = this.visningDatabaseKonverterer(filtrertDatabaseSok, eitTreffMengdeBedrift);
            if (kanskjeTreff) { nyDatabaseForSok.push(kanskjeTreff); }
          }

          // Sorter (mest treff fyrst)
          nyDatabaseForSok.sort((a, b) => b.antalTreff - a.antalTreff);

          // OK -> Minst eit resultat
          await new Promise(res => { setTimeout(() => res(), 300); }); resolve(nyDatabaseForSok);
        } else { resolve(null); }
      });

      return alleSoksTreff;
    }

  }
  eitSokAvBedrifter(inputElement: HTMLInputElement): void {
    clearTimeout(this.startEitNyttSok);
    this.settBedrifterVisningsData(null);

    // Start Søk
    if (inputElement.value.length === 0) {
      this.settBedrifterVisningsData(this.fullVisningDatabaseKonverterer(this.alleBedrifter));
      this.leggTilNyLazyVisningBilete(); return;
    }
    if (inputElement.value.length === 1) { this.settBedrifterVisningsData([]); return; }

    this.startEitNyttSok = setTimeout(async () => {
      this.settBedrifterVisningsData(await this.enkelSokMotor(this.alleBedrifter, inputElement.value));
      this.leggTilNyLazyVisningBilete();
    }, 600);
  }

  forkortString(data: string, lengde: number): string {
    if (data.length <= lengde) { return data; }

    return `${data.slice(0, lengde)} <b>...</b>`;
  }

}
