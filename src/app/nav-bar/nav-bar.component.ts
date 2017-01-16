import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

import {Subject} from 'rxjs/Subject';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  click$ = new Subject();

  clock;

  constructor(store:Store) {
    this.clock = store.select('clock');

  }

  ngOnInit() {

  }

}
