import { Injectable } from '@angular/core';

import { Bedrift } from '../type-oversikt';
import { Bedrifter } from '../database-bedrifter';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  async hentAlleBedrifter(): Promise<Bedrift[]> {
    return Bedrifter;
  }
}
