import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  constructor(public navCtrl: NavController) {

  }


}
