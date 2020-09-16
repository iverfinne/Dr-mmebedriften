import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nedteller-lansering',
  templateUrl: './nedteller-lansering.component.html',
  styleUrls: ['./nedteller-lansering.component.scss']
})
export class NedtellerLanseringComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
    const targetDato = new Date('24. september 2020 00:00');

    // Tell ned...
  }

}
