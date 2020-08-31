import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlleBedrifterComponent } from './alle-bedrifter/alle-bedrifter.component';
import { EinBedriftComponent } from './ein-bedrift/ein-bedrift.component';
import { StudentTestComponent } from './student-test/student-test.component';
import { OmOssComponent } from './om-oss/om-oss.component';

const routes: Routes = [
  {
    path: 'bedrifter',
    component: AlleBedrifterComponent,
    children: [
      {
        path: ':bedrift',
        component: EinBedriftComponent,
        outlet: 'bedrift'
      }
    ]
  },
  {
    path: 'ta-testen',
    component: StudentTestComponent
  },
  {
    path: 'om-oss',
    component: OmOssComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'bedrifter'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
