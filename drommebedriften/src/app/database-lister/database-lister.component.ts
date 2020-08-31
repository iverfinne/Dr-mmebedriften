import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Bedrift } from '../type-oversikt';
import { DatabaseService } from '../ser/database.service';

import { bedrifter, bedriftFlis } from '../angular-animation';

@Component({
  selector: 'app-database-lister',
  templateUrl: './database-lister.component.html',
  styleUrls: ['./database-lister.component.scss'],
  animations: [
    bedrifter,
    bedriftFlis
  ]
})
export class DatabaseListerComponent implements OnInit {
  @ViewChild('vi0', { static: true }) vi0: ElementRef<HTMLElement>;
  @ViewChild('vi1', { static: true }) vi1: ElementRef<HTMLElement>;

  alleBedrifter: Bedrift[] = [];
  alleBedrifterVisning: Bedrift[] = this.alleBedrifter;
  bedrifterVisningsType: 'comfy' | 'liste' = 'comfy';
  startEitNyttSok;

  constructor(
    private databaseService: DatabaseService
  ) { }

  async ngOnInit(): Promise<void> {
    this.alleBedrifter = await this.databaseService.hentAlleBedrifter();
    this.alleBedrifterVisning = this.alleBedrifter;

    const visningsTypeBedrifter = Number(window.localStorage.getItem('visningsTypeBedrifter'));
    if (visningsTypeBedrifter) {
      if (visningsTypeBedrifter === 0) { this.visning(this.vi0.nativeElement, 0); } else {
        this.visning(this.vi1.nativeElement, 1);
      }
    }
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
  async enkelSokMotor(database: Bedrift[], sokeOrd: string | null): Promise<Bedrift[] | null> {
    if (sokeOrd && sokeOrd.length > 1) {
      const sokeOrdFinale = sokeOrd.toLocaleLowerCase().trim();

      // Prøv å finn eit treff
      const alleSoksTreff: Bedrift[] = await new Promise(async (resolve, reject) => {
        const databaseMedSokeOrdTreff = database.filter(einBedrift => {
          /**
           * 1: Sjekk om søkeord er treff for heile namn
           * 2: Sjekk om søkeord er treff for namn splitta i array på 4, 3, 2
           * Om treff for kven som helst, så vis resultater for match -> Lagre alle treff i ein midlertidig array
          **/
          const namn = einBedrift.namn.toLocaleLowerCase();

          if (namn === sokeOrdFinale) { return true; } else {
            const arrSplittetOrd: string[][] = [
              this.ordSplitter(namn, 4),
              this.ordSplitter(namn, 3),
              this.ordSplitter(namn, 2)
            ];

            // Søk
            let erEitTreff = false;
            for (const splittetOrd of arrSplittetOrd) {
              splittetOrd.forEach(ord => { if (sokeOrdFinale.indexOf(ord) > -1) { erEitTreff = true; } });
            }

            return erEitTreff;
          }
        });

        await new Promise(res => { setTimeout(() => res(), 300); });
        if (databaseMedSokeOrdTreff) { resolve(databaseMedSokeOrdTreff); } else { resolve(null); }
      });

      return alleSoksTreff;
    }

  }
  eitSokAvBedrifter(inputElement: HTMLInputElement): void {
    clearTimeout(this.startEitNyttSok);
    this.alleBedrifterVisning = null;

    // Start Søk
    if (inputElement.value.length === 0) { this.alleBedrifterVisning = this.alleBedrifter; return; }
    if (inputElement.value.length === 1) { this.alleBedrifterVisning = []; return; }

    this.startEitNyttSok = setTimeout(async () => {
      this.alleBedrifterVisning = await this.enkelSokMotor(this.alleBedrifter, inputElement.value);
    }, 600);
  }

  forkortString(data: string, lengde: number): string {
    if (data.length <= lengde) { return data; }

    return `${data.slice(0, lengde)} <b>...</b>`;
  }

}
