import { Component } from '@angular/core';
import { meny } from './angular-animation';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    meny
  ]
})
export class AppComponent {
  public animasjonStatusMenyAvPaa: 'menyAv' | 'menyPa' = 'menyAv';

  constructor(
    private ruter: Router
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
}
