import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-hide-bar',
  templateUrl: './show-hide-bar.component.html',
  styleUrls: ['./show-hide-bar.component.scss']
})
export class ShowHideBarComponent implements OnInit {
  show() {
    console.log('show button clicked on');
  };
  hide() {
    console.log('hide button clicked on');
  }
  constructor() {
  }
  ngOnInit() {
  }
}
