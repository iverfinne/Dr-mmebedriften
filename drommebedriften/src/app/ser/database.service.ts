import { Injectable } from '@angular/core';

import { Bedrift } from '../type-oversikt';
import { Bedrifter } from '../database-bedrifter';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  async hentAlleBedrifter(): Promise<Bedrift[]> { return Bedrifter; }

  async hentEinBedrift(bedriftLinkID: string): Promise<Bedrift | null> {
    const einBedrift = Bedrifter.filter(v => v.ruterLink.toLocaleLowerCase() === bedriftLinkID.toLocaleLowerCase())[0];

    if (einBedrift) { return einBedrift; } return null;
  }
}
