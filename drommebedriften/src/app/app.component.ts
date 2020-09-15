import { Component, OnInit } from '@angular/core';
import { meny } from './angular-animation';
import { Router, NavigationEnd } from '@angular/router';
import { GlobaleLyttararService } from './ser/globale-lyttarar.service';

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
    private globaleLyttarar: GlobaleLyttararService
  ) {
    this.ruter.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        const url = e.url;
        if (
          !(
            (
              url.indexOf('bedrift') > -1 &&
              url.indexOf('bedrifter') === -1
            ) || (
              url.indexOf('bedrifter') > -1
            )
          )
        ) {
          // Naviger scroll-posisjon Y
          setTimeout(() => {
            const scrollOptions: ScrollToOptions = { top: 0, left: 0, behavior: 'smooth' };
            document.querySelector('html').scrollTo(scrollOptions);
          }, 500);
        }
      }
    });
  }

  ngOnInit(): void {
    window.addEventListener('keydown', e => {
      const key = e.key;

      const mainContainerEinBedrift = document.getElementById('einBedriftContainer');

      // Veksle mellom bedrifter
      if (mainContainerEinBedrift) {
        this.globaleLyttarar.einBedriftTastPress.next(key);
      } else { this.globaleLyttarar.einBedriftTastPress.next(null); }
    });
  }
}
