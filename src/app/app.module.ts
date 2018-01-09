import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { environment } from './reducers/show-hide';
import { ShowHideModule } from './components/show-hide/show-hide.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ShowHideModule,
    StoreModule.forRoot({environment, routerReducer: routerReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    StoreRouterConnectingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
