import { Component } from '@angular/core';
import { meny } from './angular-animation';

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
}
