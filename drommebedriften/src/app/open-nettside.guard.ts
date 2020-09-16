import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobaleLyttararService } from './ser/globale-lyttarar.service';

@Injectable({
  providedIn: 'root'
})
export class OpenNettsideGuardLoyve {
  constructor(
    private ruter: Router,
    private globaleLyttararService: GlobaleLyttararService
  ) { }

  canActivate(next: ActivatedRouteSnapshot): UrlTree | boolean {
    if (this.globaleLyttararService.heileSidaLukket.value.aktiverLaas) {
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

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.loyve.canActivate(next);
  }

}
