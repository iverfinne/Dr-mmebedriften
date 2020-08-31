import { Component, OnInit } from '@angular/core';
import { Bedrift } from '../type-oversikt';
import { DatabaseService } from '../ser/database.service';
import { Router, NavigationEnd } from '@angular/router';
import { einBedrift } from '../angular-animation';
import { GlobaleLyttararService } from '../ser/globale-lyttarar.service';

@Component({
  templateUrl: './ein-bedrift.component.html',
  styleUrls: ['./ein-bedrift.component.scss'],
  animations: [
    einBedrift
  ]
})
export class EinBedriftComponent implements OnInit {
  einBedrift: Bedrift;
  currBedriftRuterLink;

  containerStatus: 'av' | 'pa' = 'pa';

  constructor(
    private ruter: Router,
    private databaseService: DatabaseService,
    private globaleLyttararService: GlobaleLyttararService
  ) {
    this.ruter.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let bigPp = event.url.split('bedrift:')[1];
        bigPp = bigPp.slice(0, bigPp.length - 1);

        this.currBedriftRuterLink = bigPp;
      }
    });
  }

  async ngOnInit(): Promise<void> {
    this.einBedrift = await this.databaseService.hentEinBedrift(this.currBedriftRuterLink);
  }

  opneUndersokelse(): void {
    this.globaleLyttararService.animasjonsStatusGoogleFormEinBedrift.next('pa');
  }

  lukkPanel(): void {
    this.containerStatus = 'av';

    setTimeout(() => {
      this.ruter.navigateByUrl('[\'\', { outlets: { bedrift: null } }]');
    }, 400);
  }

}
