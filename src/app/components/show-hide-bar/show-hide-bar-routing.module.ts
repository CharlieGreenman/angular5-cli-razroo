import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowHideBarComponent } from './show-hide-bar.component';

const routes: Routes = [
  { path: 'show-hide', component: ShowHideBarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowHideBarRoutingModule { }
