import { Component, OnInit } from '@angular/core';
import { Bedrift } from '../type-oversikt';
import { DatabaseService } from '../ser/database.service';
import { Router, NavigationEnd } from '@angular/router';
import { einBedrift } from '../angular-animation';

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

  constructor(
    private ruter: Router,
    private databaseService: DatabaseService
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

}
