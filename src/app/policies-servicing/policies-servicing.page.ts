import { Component } from '@angular/core';

import Html from '../header/top-header.html';

@Component({
  selector: 'app-tab1',
  templateUrl: 'policies-servicing.page.html',
  styleUrls: ['policies-servicing.page.scss']
})
export class PoliciesServicing {

   title = 'angularincludehtmltemplate';
  topheader = Html;


  constructor() {}

}
