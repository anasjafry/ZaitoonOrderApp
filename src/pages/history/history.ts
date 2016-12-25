import { Component } from '@angular/core';
import { OrderdetailsPage } from './orderdetails/orderdetails';
import { NavController,NavParams } from 'ionic-angular';
import { TrackPage } from './track/track';
import { MenuService } from '../services/menurender';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
  providers: [MenuService]
})
export class HistoryPage {
  historyData: Array<any>;
  orders: string = "live";
  constructor(public navCtrl: NavController,
    private menuService: MenuService,
    params: NavParams) {  }

  orderdetailsPage(item) {
    var x=JSON.stringify(item);
    console.log(item);
    this.navCtrl.push(OrderdetailsPage, { item:item });
  }

  trackPage() {
  	this.navCtrl.push(TrackPage);
  }

  ionViewWillEnter() {
      this.history();
  }

  history() {
    this.menuService.orderhistory().subscribe(//call the post
    data => this.historyData = data, // put the data returned from the server in our variable
    error => console.log("Error HTTP Post Service"), // in case of failure show this message
    () => console.log(this.historyData)//run this code in all cases
    );
    }
}
