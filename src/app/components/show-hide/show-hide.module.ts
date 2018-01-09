import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowHideRoutingModule } from './show-hide-routing.module';
import { ShowHideComponent } from './show-hide.component';

import { ShowHideComponent } from './show-hide.component';
import { ShowHideBarComponent } from '../show-hide-bar/show-hide-bar.component';
import { ShowHideCircleComponent } from '../show-hide-circle/show-hide-circle.component';


@NgModule({
  imports: [
    CommonModule,
    ShowHideRoutingModule
  ],
  declarations: [
    ShowHideComponent,
    ShowHideBarComponent,
    ShowHideCircleComponent
  ],
  exports: [
    ShowHideComponent
  ]
})
export class ShowHideModule { }
