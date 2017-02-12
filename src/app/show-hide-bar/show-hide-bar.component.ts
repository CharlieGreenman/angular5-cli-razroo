import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/mapTo';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import { showBlock, hideBlock} from '../actions/show-hide';

@Component({
  selector: 'app-show-hide-bar',
  templateUrl: './show-hide-bar.component.html',
  styleUrls: ['./show-hide-bar.component.scss']
})
export class ShowHideBarComponent{
  show$ = new Subject();
  hide$ = new Subject();
  environment;

  constructor(store: Store<any>) {
    this.environment = store.select('environment');

    Observable.merge(
      this.show$.mapTo(showBlock()),
      this.hide$.mapTo(hideBlock())
    )
    .subscribe((action)=>{
      store.dispatch(action)
    })
  }
}
