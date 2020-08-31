import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobaleLyttararService {
  // Google Form for ein bedrift
  animasjonsStatusGoogleFormEinBedrift = new BehaviorSubject<'av' | 'pa'>('av');

  constructor() { }
}
