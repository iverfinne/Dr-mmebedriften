import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlleBedrifterComponent } from './alle-bedrifter/alle-bedrifter.component';
import { EinBedriftComponent } from './ein-bedrift/ein-bedrift.component';
import { StudentTestComponent } from './student-test/student-test.component';
import { OmOssComponent } from './om-oss/om-oss.component';
import { NedtellerLanseringComponent } from './nedteller-lansering/nedteller-lansering.component';
import { OpenNettsideGuard } from './open-nettside.guard';

const routes: Routes = [
  {
    path: 'nedtelling',
    component: NedtellerLanseringComponent,
    canActivate: [OpenNettsideGuard]
  },
  {
    path: 'bedrifter',
    component: AlleBedrifterComponent,
    children: [
      {
        path: ':bedrift',
        component: EinBedriftComponent,
        outlet: 'bedrift'
      }
    ],
    canActivate: [OpenNettsideGuard]
  },
  {
    path: 'ta-testen',
    component: StudentTestComponent,
    canActivate: [OpenNettsideGuard]
  },
  {
    path: 'om-oss',
    component: OmOssComponent,
    canActivate: [OpenNettsideGuard]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'bedrifter'
  }
];

/* https://www.xn--drmmebedriften-rqb.no/bedrifter/(bedrift:conocophilips)?fbclid=IwAR3e3MoyWA4f_GzsoZ-c2fkq-qdWm-Ww9ISd7BO247B9kR7ZsWZjX1Z4x2o */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
