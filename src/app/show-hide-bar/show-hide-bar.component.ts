import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/mapTo';
import { Subject } from 'rxjs/Subject';
import { Store, Action } from '@ngrx/store';

import { toggleBlock } from '../actions/show-hide';

@Component({
  selector: 'app-show-hide-bar',
  templateUrl: './show-hide-bar.component.html',
  styleUrls: ['./show-hide-bar.component.scss']
})
export class ShowHideBarComponent{
  show = false;
  show$ = new Subject();
  hide$ = new Subject();
  environment;

  constructor(store: Store<any>) {
    this.environment = store.select('environment');

    Observable.merge(
      this.show$.mapTo(new toggleBlock({show: !this.show})),
      this.hide$.mapTo(new toggleBlock({show: !this.show}))
    )
    .subscribe((action: Action) => {
      store.dispatch(action);
    });
  }
}
