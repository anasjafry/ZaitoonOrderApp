import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

var items = [];
items.push({"itemCode":1001,"itemName":"Paneer Butter Masala","itemQuantity": 4,"itemPrice":90});
items.push({"itemCode":1002,"itemName":"Channa Butter Masala","itemQuantity": 1,"itemPrice":70});
items.push({"itemCode":1003,"itemName":"Gobi Masala","itemQuantity": 3,"itemPrice":80});
localStorage.setItem('myCart', JSON.stringify(items));
//var info = JSON.parse(localStorage.getItem("itemsInfo"));
//console.log(info[0]);


@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  info = JSON.parse(localStorage.getItem("itemsInfo"));
  constructor(public navCtrl: NavController,
  public alertCtrl: AlertController
  ) {  }




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

  
    
  // addFunction(code) {
  // var info = JSON.parse(localStorage.getItem("itemsInfo"));
  // var i = 0;
  // var flag = -1;
  // while(i<info.length) {
  //   if(info[i].itemCode==code) {
  //     flag = i;
  //     break;
  //   }
  // i++; 
  // } 
  // var item = JSON.parse(localStorage.itemsInfo);  
  // item[flag].itemQuantity +=1;
  // localStorage.setItem("itemsInfo", JSON.stringify(item));
  // console.log((JSON.parse(localStorage.getItem("itemsInfo")))[0]);          
  // }

}
