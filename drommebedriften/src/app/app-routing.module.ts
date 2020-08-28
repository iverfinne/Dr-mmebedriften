import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlleBedrifterComponent } from './alle-bedrifter/alle-bedrifter.component';

const routes: Routes = [
  {
    path: '',
    component: AlleBedrifterComponent
  },
  {
    path: 'bedriften/:bedrift',
    component: AlleBedrifterComponent
  },
  {
    path: 'ta-testen',
    component: AlleBedrifterComponent
  },
  {
    path: 'om-oss',
    component: AlleBedrifterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
