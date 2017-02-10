import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { showBlock, hideBlock} from '../actions/show-hide';

@Component({
  selector: 'app-show-hide-bar',
  templateUrl: './show-hide-bar.component.html',
  styleUrls: ['./show-hide-bar.component.scss']
})
export class ShowHideBarComponent{
  environment;
  constructor(private store: Store<any>) {
    this.environment = store.select('environment');
  }
  show() {
    this.store.dispatch(showBlock());
  }
  hide() {
    this.store.dispatch(hideBlock());
  }

}
