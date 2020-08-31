import { Injectable } from '@angular/core';
import { UrlSegmentGroup } from '@angular/router';

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
