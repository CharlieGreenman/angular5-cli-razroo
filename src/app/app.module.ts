import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { environment } from './reducers/show-hide';
import { ShowHideBarComponent } from './components/show-hide-bar/show-hide-bar.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { mystateReducer } from './+state/mystate.reducer';
import { mystateInitialState } from './+state/mystate.init';
import { MystateEffects } from './+state/mystate.effects';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { showHideReducer } from './+state/show-hide.reducer';
import { showHideInitialState } from './+state/show-hide.init';
import { ShowHideEffects } from './+state/show-hide.effects';
import { productReducer } from './+state/product.reducer';
import { productInitialState } from './+state/product.init';
import { ProductEffects } from './+state/product.effects';

@NgModule({
  declarations: [
    AppComponent,
    ShowHideBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({environment}),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    StoreModule.forRoot({mystate: mystateReducer}, {initialState: {mystate: mystateInitialState}}),
    EffectsModule.forRoot([MystateEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule,
    StoreModule.forRoot({showHide: showHideReducer}, {initialState: {showHide: showHideInitialState}}),
    EffectsModule.forRoot([ShowHideEffects]),
    StoreModule.forFeature('product', productReducer, {initialState: productInitialState}),
    EffectsModule.forFeature([ProductEffects])
  ],
  providers: [MystateEffects, ShowHideEffects, ProductEffects],
  bootstrap: [AppComponent]
})
export class AppModule { }
