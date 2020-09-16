import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BedrifterTreffSokVisning, InstillingerLaasNettside } from '../type-oversikt';

@Injectable({
  providedIn: 'root'
})
export class GlobaleLyttararService {
  // Google Form for ein bedrift
  animasjonsStatusGoogleFormEinBedrift = new BehaviorSubject<'av' | 'pa'>('av');
  einBedriftTastPress = new BehaviorSubject<KeyboardEvent['key'] | null>(null);
  bedrifterSomCurrVises = new BehaviorSubject<BedrifterTreffSokVisning[]>(null);
  heileSidaLukket = new BehaviorSubject<InstillingerLaasNettside>({ aktiverLaas: false });

  constructor() { }
}
