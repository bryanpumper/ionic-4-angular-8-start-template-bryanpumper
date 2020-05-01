import { Component } from '@angular/core';

import Html from '../header/top-header.html';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

   title = 'angularincludehtmltemplate';
  topheader = Html;


  constructor() {}

}
