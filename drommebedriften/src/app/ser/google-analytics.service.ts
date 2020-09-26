import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService { /* https://firebase.google.com/docs/reference/js/firebase.analytics.Analytics */
  private googleAnalytics = firebase.analytics();

  // *****************
  // ** BEDRIFTER **
  /**
   * Bedrift som blir trykket på (frå Bedrifter-lista aka 'Les mer'-knappen)
  **/
  Bedrifter_KlikkPaaLesMerKnappEinBedrift(bedriftFintNamn: string): void {
    this.googleAnalytics.logEvent('bedrifter', {
      les_mer_knapp: bedriftFintNamn
    });
  }

  // *****************
  // ** EIN BEDRIFT **
  /**
   * Google Form; (speedate)-knappen
  **/
  EinBedrift_KlikkPaaSpeedateKnapp(bedriftFintNamn: string): void {
    this.googleAnalytics.logEvent('en_bedrift', {
      speedate_knapp: bedriftFintNamn
    });
  }

  /**
   * Link til ekstern heimeside som blir trykket på
  **/
  EinBedrift_KlikkPaaEksternHeimesideKnapp(bedriftFintNamn: string): void {
    this.googleAnalytics.logEvent('en_bedrift', {
      ekstern_hjemmeside_knapp: bedriftFintNamn
    });
  }

  /**
   * Kor lenge ein brukar var på sida
  **/
  EinBedrift_korLengeEinBrukarVarPaSida(bedriftFintNamn: string, tidMS: number): void {
    // Over 9000 !
    if (tidMS > 9000) {
      let cirkaTid = '>9000<=11000';

      if (tidMS > 100000) {
        cirkaTid = '>100000';
      } else if (tidMS > 95000) {
        cirkaTid = '>95000<=100000';
      } else if (tidMS > 90000) {
        cirkaTid = '>90000<=95000';
      } else if (tidMS > 80000) {
        cirkaTid = '>80000<=90000';
      } else if (tidMS > 75000) {
        cirkaTid = '>75000<=80000';
      } else if (tidMS > 70000) {
        cirkaTid = '>70000<=75000';
      } else if (tidMS > 65000) {
        cirkaTid = '>65000<=70000';
      } else if (tidMS > 55000) {
        cirkaTid = '>55000<=65000';
      } else if (tidMS > 50000) {
        cirkaTid = '>50000<=55000';
      } else if (tidMS > 45000) {
        cirkaTid = '>45000<=50000';
      } else if (tidMS > 40000) {
        cirkaTid = '>40000<=45000';
      } else if (tidMS > 35000) {
        cirkaTid = '>35000<=40000';
      } else if (tidMS > 29000) {
        cirkaTid = '>29000<=35000';
      } else if (tidMS > 21000) {
        cirkaTid = '>21000<=29000';
      } else if (tidMS > 19000) {
        cirkaTid = '>19000<=21000';
      } else if (tidMS > 17000) {
        cirkaTid = '>17000<=19000';
      } else if (tidMS > 15000) {
        cirkaTid = '>15000<=17000';
      } else if (tidMS > 13000) {
        cirkaTid = '>13000<=15000';
      } else if (tidMS > 11000) {
        cirkaTid = '>11000<=13000';
      }

      // *** Slått av... Bruker kanskje for mykje data...
      this.googleAnalytics.logEvent('en_bedrift', {
        hvor_lenge_paa_besok_msek: cirkaTid
      });
    }
  }

  // *****************
  // *****************
}
