import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowHideRoutingModule } from './show-hide-routing.module';
import { ShowHideComponent } from './show-hide.component';

@NgModule({
  imports: [
    CommonModule,
    ShowHideRoutingModule
  ],
  declarations: [ShowHideComponent]
})
export class ShowHideModule { }
