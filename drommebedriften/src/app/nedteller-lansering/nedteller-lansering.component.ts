import { Component, OnInit } from '@angular/core';
import { timer, Subscription } from 'rxjs';
import { GlobaleLyttararService } from '../ser/globale-lyttarar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nedteller-lansering',
  templateUrl: './nedteller-lansering.component.html',
  styleUrls: ['./nedteller-lansering.component.scss']
})
export class NedtellerLanseringComponent implements OnInit {
  ferdigNedtelling = false;

  currNedtellingData: {
    dager: number,
    timer: number,
    minutter: number,
    sekunder: number
  } = {
      dager: 0,
      timer: 0,
      minutter: 0,
      sekunder: 0
    };

  abonnement0: Subscription;

  constructor(
    private ruter: Router,
    private globaleLyttararService: GlobaleLyttararService
  ) { }

  ngOnInit(): void {
    let instillinger = this.globaleLyttararService.heileSidaLukket.value;
    let targetDato = new Date(instillinger.tilDato ? instillinger.tilDato : '').getTime();

    // Opne sida
    if (!instillinger.aktiverLaas || targetDato - new Date().getTime() <= 0) {
      this.sendBrukarVidereTilStartSide();
    } else {
      // Tell ned...
      this.abonnement0 = timer(0, 1000).subscribe(x => {
        // Oppdater...
        instillinger = this.globaleLyttararService.heileSidaLukket.value;
        targetDato = new Date(instillinger.tilDato ? instillinger.tilDato : '').getTime();

        if (instillinger.aktiverLaas) {
          const currDato = new Date().getTime();

          // Opne sida for brukaren
          if (targetDato - currDato <= 0) {
            this.ferdigNedtelling = true;

            this.abonnement0.unsubscribe();
            this.abonnement0.remove(this.abonnement0);

            this.sendBrukarVidereTilStartSide();
          } else {
            // Tell ned..

            // Dager
            const tidIgjenIDager = new Date(targetDato - currDato).getTime() / 1000 / 60 / 60 / 24;
            this.currNedtellingData.dager = Math.floor(tidIgjenIDager);
            // Timer
            const tidIgjenRelatertTimer = ((tidIgjenIDager - this.currNedtellingData.dager) * 24);
            this.currNedtellingData.timer = Math.floor(tidIgjenRelatertTimer);
            // Minutter
            const tidIgjenRelatertMinutter = ((tidIgjenRelatertTimer - this.currNedtellingData.timer) * 60);
            this.currNedtellingData.minutter = Math.floor(
              tidIgjenRelatertMinutter
            );
            // Sekunder
            const tidIgjenRelatertSekunder = ((tidIgjenRelatertMinutter - this.currNedtellingData.minutter) * 60);
            this.currNedtellingData.sekunder = Math.floor(tidIgjenRelatertSekunder);
          }
        }
      });
    }
  }

  sendBrukarVidereTilStartSide(): void {
    // Opne opp..
    this.globaleLyttararService.heileSidaLukket.next({ aktiverLaas: false });
    // Send videre
    setTimeout(() => {
      this.ruter.navigateByUrl('/bedrifter');
    }, 1500);
  }

}
