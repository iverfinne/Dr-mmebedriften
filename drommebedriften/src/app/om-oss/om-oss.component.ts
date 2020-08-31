import { Component, OnInit } from '@angular/core';
import { omOssContainer } from '../angular-animation';

@Component({
  selector: 'app-om-oss',
  templateUrl: './om-oss.component.html',
  styleUrls: ['./om-oss.component.scss'],
  animations: [
    omOssContainer
  ]
})
export class OmOssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
