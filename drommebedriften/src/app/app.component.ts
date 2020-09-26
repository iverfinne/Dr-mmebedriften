import { Component, OnInit } from '@angular/core';
import { meny } from './angular-animation';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { GlobaleLyttararService } from './ser/globale-lyttarar.service';
import { LukkNedSideService } from './ser/lukk-ned-side.service';
import { analytics } from 'firebase';
import { Location } from '@angular/common';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    meny
  ]
})
export class AppComponent implements OnInit {
  public animasjonStatusMenyAvPaa: 'menyAv' | 'menyPa' = 'menyAv';

  constructor(
    private ruter: Router,
    public globaleLyttarar: GlobaleLyttararService,
    private lukkNedSideService: LukkNedSideService,
    private location: Location
  ) {
    if (window.location.host.match(new RegExp('localhost', 'gm'))) {
      firebase.analytics().setAnalyticsCollectionEnabled(false);
    } else {
      firebase.analytics().setAnalyticsCollectionEnabled(true);
    }

    let nyStartUrl = null;
    this.ruter.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        // Visst e.g. Facebook-link.. Ta vekk queryen... Sett inn lengere nede
        const url = e.url;
        if (url.match(/[?]/gm)) {
          nyStartUrl = url.split('?');

          // Naviger videre til ny plass...
          this.ruter.navigateByUrl(nyStartUrl[0]);
        }
      }

      if (e instanceof NavigationEnd) {
        const url = e.url;

        // Rediger URL, og sett inn queryen..
        if (nyStartUrl) {
          this.location.go(e.url, nyStartUrl[1]);
        }

        ///
        // Naviger scroll-posisjon Y (HTML)
        if (url.indexOf('bedrifter') === -1 && url.indexOf('bedrift:null') === -1) {
          setTimeout(() => {
            const scrollOptions: ScrollToOptions = { top: 0, left: 0, behavior: 'smooth' };
            const element = document.querySelector('html'); if (element) { element.scrollTo(scrollOptions); }
          }, 500);
        }

        ///
        // Naviger scroll-posisjon Y (ein bedrift)
        if (url.indexOf('bedrifter/(bedrift:') > -1) {
          setTimeout(() => {
            const scrollOptions: ScrollToOptions = { top: 0, left: 0, behavior: 'smooth' };
            const element = document.querySelector('#einBedriftContainer'); if (element) { element.scrollTo(scrollOptions); }
          }, 100);
        }
      }
    });
  }

  ngOnInit(): void {
    this.lukkNedSideService.opneEllerLukkeSideForBruk();

    window.addEventListener('keydown', e => {
      const key = e.key;

      const mainContainerEinBedrift = document.getElementById('einBedriftContainer');

      // Veksle mellom bedrifter
      if (mainContainerEinBedrift) {
        this.globaleLyttarar.einBedriftTastPress.next(key);
      } else { this.globaleLyttarar.einBedriftTastPress.next(null); }
    });
  }

  lukkMenyMobil(): void {
    if (this.animasjonStatusMenyAvPaa === 'menyAv') {
      this.animasjonStatusMenyAvPaa = 'menyPa';
    } else {
      this.animasjonStatusMenyAvPaa = 'menyAv';
    }
  }
}
