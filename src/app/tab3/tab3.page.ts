import { Component } from '@angular/core';

import Html from '../header/top-header.html';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  title = 'angularincludehtmltemplate';
  test = Html;

  constructor() {}

}
