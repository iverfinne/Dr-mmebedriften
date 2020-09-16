import { Injectable, OnInit } from '@angular/core';
import { GlobaleLyttararService } from './globale-lyttarar.service';
import { InstillingerLaasNettside } from '../type-oversikt';

@Injectable({
  providedIn: 'root'
})
export class LukkNedSideService {

  constructor(
    private globaleLyttararService: GlobaleLyttararService
  ) { }

  opneEllerLukkeSideForBruk(): void {
    // Instillinger (dette kan og potensielt legges i ein DB)
    const laasSida: InstillingerLaasNettside = {
      aktiverLaas: false,
      tilDato: '24. september 2020 00:00'
    };

    // Deaktiver om dato er forbi...
    if (!laasSida.tilDato || new Date(laasSida.tilDato).getTime() - new Date().getTime() <= 0) {
      laasSida.aktiverLaas = false;
    }

    this.globaleLyttararService.heileSidaLukket.next(laasSida);
  }
}
