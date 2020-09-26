import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlleBedrifterComponent } from './alle-bedrifter/alle-bedrifter.component';
import { BedriftQuizComponent } from './bedrift-quiz/bedrift-quiz.component';
import { DatabaseListerComponent } from './database-lister/database-lister.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EinBedriftComponent } from './ein-bedrift/ein-bedrift.component';
import { StudentTestComponent } from './student-test/student-test.component';
import { OmOssComponent } from './om-oss/om-oss.component';
import { DynamiskGoogleFormHTMLComponent } from './dynamisk-google-form-html/dynamisk-google-form-html.component';
import { NedtellerLanseringComponent } from './nedteller-lansering/nedteller-lansering.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment.prod';

// For Google Analytics...
import * as firebase from 'firebase/app';
firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    AlleBedrifterComponent,
    BedriftQuizComponent,
    DatabaseListerComponent,
    EinBedriftComponent,
    StudentTestComponent,
    OmOssComponent,
    DynamiskGoogleFormHTMLComponent,
    NedtellerLanseringComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
