import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { dynamiskGoogleFormEinBedrift } from '../angular-animation';
import { GlobaleLyttararService } from '../ser/globale-lyttarar.service';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-dynamisk-google-form-html',
  templateUrl: './dynamisk-google-form-html.component.html',
  styleUrls: ['./dynamisk-google-form-html.component.scss'],
  animations: [
    dynamiskGoogleFormEinBedrift
  ]
})
export class DynamiskGoogleFormHTMLComponent implements OnInit, OnDestroy {
  @Input() htmlLink: string | SafeResourceUrl;

  animasjonsStatus: 'av' | 'pa' = 'av';

  abonnement0: Subscription;
  abonnement1: Subscription;

  constructor(
    private domSanitizer: DomSanitizer,
    private globaleLyttararService: GlobaleLyttararService
  ) { }

  ngOnDestroy(): void {
    if (this.abonnement0) { this.abonnement0.unsubscribe(); }
    if (this.abonnement1) { this.abonnement0.unsubscribe(); }
  }

  ngOnInit(): void {
    this.abonnement1 = timer(0, 300).subscribe(x => {
      // Konvert visst ein ny link blir oppgitt...
      this.settHTMLLink();
    });

    this.abonnement0 = this.globaleLyttararService.animasjonsStatusGoogleFormEinBedrift.asObservable().subscribe(v => {
      this.animasjonsStatus = v;
    });
  }

  settHTMLLink(): void {
    if (typeof this.htmlLink === 'string') {
      this.htmlLink = this.domSanitizer.bypassSecurityTrustResourceUrl(this.htmlLink);
    }
  }

  validSrcInput(src: string | SafeResourceUrl): boolean {
    if (src && typeof src !== 'string') { return true; }

    return false;
  }

  lukkPanel(): void {
    this.globaleLyttararService.animasjonsStatusGoogleFormEinBedrift.next('av');
  }

}
