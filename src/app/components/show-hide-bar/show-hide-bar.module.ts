import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowHideBarRoutingModule } from './show-hide-bar-routing.module';

import { ShowHideBarComponent } from './show-hide-bar.component';

@NgModule({
  imports: [
    CommonModule,
    ShowHideBarRoutingModule
  ],
  declarations: [
    ShowHideBarComponent
  ],
  exports: [
    ShowHideBarComponent
  ]

})
export class ShowHideBarModule { }
