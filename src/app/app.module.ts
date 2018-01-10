import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { Params, RouterStateSnapshot } from '@angular/router';
import { StoreRouterConnectingModule, routerReducer, RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';
import { AppComponent } from './app.component';

import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { environment } from './reducers/show-hide';
import { ShowHideModule } from './components/show-hide/show-hide.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export interface State {
  router: RouterReducerState<RouterStateUrl>;
  environment: any;
}

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const { url, root: { queryParams } } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  environment
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ShowHideModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    })
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
