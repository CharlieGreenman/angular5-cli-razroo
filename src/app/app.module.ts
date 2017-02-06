import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { StoreModule } from '@ngrx/store';
import { clock } from './reducers/reducers';
import { environment } from './reducers/show-hide';
import { ShowHideBarComponent } from './show-hide-bar/show-hide-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ShowHideBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({clock, environment})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
