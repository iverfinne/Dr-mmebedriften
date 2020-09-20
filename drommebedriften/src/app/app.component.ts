import { Component, OnInit } from '@angular/core';
import { meny } from './angular-animation';
import { Router, NavigationEnd } from '@angular/router';
import { GlobaleLyttararService } from './ser/globale-lyttarar.service';
import { LukkNedSideService } from './ser/lukk-ned-side.service';
import { AngularFireAnalytics } from '@angular/fire/analytics';

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
    analytics: AngularFireAnalytics
  ) {
    this.ruter.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        const url = e.url;

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

    analytics.setAnalyticsCollectionEnabled(true);
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
