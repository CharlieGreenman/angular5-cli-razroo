import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-show-hide-bar',
  templateUrl: './show-hide-bar.component.html',
  styleUrls: ['./show-hide-bar.component.scss']
})
export class ShowHideBarComponent implements OnInit {

  constructor(store: Store<any>) {
    show() {
      store.dispatch('SHOW');
      console.log('show button clicked on');
    }
    hide() {
      this.dispatch('HIDE');
      console.log('hide button clicked on');
    }
  }


  ngOnInit() {
  }
}
