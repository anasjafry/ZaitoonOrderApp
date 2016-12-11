import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

  constructor(public navCtrl: NavController,
  public alertCtrl: AlertController
  ) {

  }
  doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Coupon Code',
      inputs: [
        {
          name: 'coupon',
          placeholder: 'Enter Coupon Code'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
