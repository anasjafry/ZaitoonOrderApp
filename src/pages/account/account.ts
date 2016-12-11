import { Component } from '@angular/core';
import { AddressPage } from './address/address';
import { NavController } from 'ionic-angular';
import { OffersPage } from './offers/offers';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  constructor(public navCtrl: NavController) {

  }

  addressPage() {
    console.log("Address Page Called");
    this.navCtrl.push(AddressPage);
  }

  offersPage() {
  	this.navCtrl.push(OffersPage);
  }
}
