import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeVaktService {

  constructor() { }

  // Globalt
  erEitHTMLElement(verdi: any | Element | HTMLElement | EventTarget): verdi is HTMLElement {
    return (verdi as HTMLElement) !== undefined;
  }
}
