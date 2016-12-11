import { Component } from '@angular/core';
import { OrderdetailsPage } from './orderdetails/orderdetails';
import { NavController } from 'ionic-angular';
import { TrackPage } from './track/track';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
	orders: string = "live";
  constructor(public navCtrl: NavController) {

  }

  orderdetailsPage() {
    console.log("Order Details Page Called");
    this.navCtrl.push(OrderdetailsPage);
  }

  trackPage() {
  	this.navCtrl.push(TrackPage);
  }
}
