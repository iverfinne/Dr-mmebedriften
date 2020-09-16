import { Injectable } from '@angular/core';

import { Bedrift } from '../type-oversikt';
import { Bedrifter } from '../database-bedrifter';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  async hentAlleBedrifter(): Promise<Bedrift[]> {
    const BedrifterImportert = Bedrifter;
    if (BedrifterImportert.length % 2 !== 0) {
      // Legg til falsk sånn det blir partall...
      BedrifterImportert.push({
        namn: '--falsk--',
        ruterLink: '-',
        beskriving1: '-'
      });
    }

    return BedrifterImportert;
  }

  async hentEinBedrift(bedriftLinkID: string): Promise<Bedrift | null> {
    const einBedrift = Bedrifter.filter(v => v.ruterLink.toLocaleLowerCase() === bedriftLinkID.toLocaleLowerCase())[0];

    if (einBedrift) { return einBedrift; } return null;
  }
}
