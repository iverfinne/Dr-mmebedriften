import { Injectable } from '@angular/core';
import { GlobaleLyttararService } from './globale-lyttarar.service';

import { AngularFirestore } from '@angular/fire/firestore';
import { TypeVaktService } from './type-vakt.service';
import { InnstillingerLaasNettside } from '../type-oversikt';

@Injectable({
  providedIn: 'root'
})
export class LukkNedSideService {

  constructor(
    private globaleLyttararService: GlobaleLyttararService,
    private firestore: AngularFirestore,
    private typeVaktService: TypeVaktService
  ) { }

  async opneEllerLukkeSideForBruk(): Promise<InnstillingerLaasNettside | null> {
    // Innstillinger (dette kan og potensielt legges i ein DB)
    const innstillingerNettside = (await this.firestore.collection('innstillinger').doc('nettside').get().toPromise()).data();

    if (this.typeVaktService.erInnstillingerNettside(innstillingerNettside)) {
      const laasIns = innstillingerNettside.laas;

      laasIns.aktiverLaas = false;

      // Deaktiver om dato er forbi...
      if (!laasIns.tilDato || new Date(laasIns.tilDato).getTime() - new Date().getTime() <= 0) {
        laasIns.aktiverLaas = false;
      }

      this.globaleLyttararService.heileSidaLukket.next(laasIns);

      return laasIns;
    }

    return null;
  }
}
