import { Injectable } from '@angular/core';
import { InnstillingerNettside } from '../type-oversikt';

@Injectable({
  providedIn: 'root'
})
export class TypeVaktService {

  constructor() { }

  // Globalt
  erEitHTMLElement(verdi: any | Element | HTMLElement | EventTarget): verdi is HTMLElement {
    return (verdi as HTMLElement) !== undefined;
  }

  erInnstillingerNettside(verdi: any | InnstillingerNettside['nettside']): verdi is InnstillingerNettside['nettside'] {
    return (verdi as InnstillingerNettside['nettside']) !== undefined;
  }
}
