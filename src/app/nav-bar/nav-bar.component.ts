import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/merge'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/scan'
import 'rxjs/add/operator/mapTo'
import { Subject } from 'rxjs/Subject'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent{
  click$ = new Subject();
  clock;

  constructor(store: Store<any>) {
      this.clock = store.select('clock')

      Observable.merge(
          this.click$.mapTo('hour'),
          Observable.interval(1000).mapTo('second')
      )
          .subscribe((type)=>{
              store.dispatch({type})
          })
  }

}
