import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { showBlock, hideBlock} from '../actions/show-hide';

@Component({
  selector: 'app-show-hide-bar',
  templateUrl: './show-hide-bar.component.html',
  styleUrls: ['./show-hide-bar.component.scss']
})
export class ShowHideBarComponent{

  constructor(private store: Store<any>) {
  }

  show() {
    this.store.dispatch(showBlock('true'));
    console.log('show button clicked on');
  }
  hide() {
    this.store.dispatch(hideBlock('hide'));
    console.log('hide button clicked on');
  }

}
