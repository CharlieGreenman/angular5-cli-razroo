import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { environment } from './reducers/show-hide';
import { ShowHideBarModule } from './components/show-hide-bar/show-hide-bar.component';
import { ShowHideBarRoutingModule } from './components/show-hide-bar/show-hide-bar-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ShowHideCircleComponent } from './components/show-hide-circle/show-hide-circle.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowHideCircleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.forRoot({environment}),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
