import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { GlobaleLyttararService } from './ser/globale-lyttarar.service';

@Injectable({
  providedIn: 'root'
})
export class OpenNettsideGuardLoyve {
  constructor(
    private ruter: Router,
    public globaleLyttararService: GlobaleLyttararService
  ) { }

  async canActivate(next: ActivatedRouteSnapshot): Promise<UrlTree | boolean> {
    if (this.globaleLyttararService.heileSidaLukket.value && this.globaleLyttararService.heileSidaLukket.value.aktiverLaas) {
      if (next.url[0].path === 'nedtelling') {
        return true;
      } else {
        return this.ruter.parseUrl('/nedtelling');
      }
    } else {
      if (next.url[0].path === 'nedtelling') {
        return this.ruter.parseUrl('/');
      } else {
        return true;
      }
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class OpenNettsideGuard implements CanActivate {
  constructor(private loyve: OpenNettsideGuardLoyve) { }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {

    await new Promise((res) => {
      const obs = timer(0, 100).subscribe(x => {
        // Sjekk om verdi ikkje er null lengere...
        if (this.loyve.globaleLyttararService.heileSidaLukket.value !== null) {
          obs.unsubscribe();
          obs.remove(obs);

          res();
        }
      });
    });

    return await this.loyve.canActivate(next);
  }

}
