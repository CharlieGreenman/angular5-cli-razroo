import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowHideBarComponent } from '../show-hide-bar/show-hide-bar.component';
import { ShowHideCircleComponent } from '../show-hide-circle/show-hide-circle.component';

const routes: Routes = [
  { path: '', component: ShowHideBarComponent ,
  { path: 'show-circle', component: ShowHideCircleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowHideRoutingModule { }
