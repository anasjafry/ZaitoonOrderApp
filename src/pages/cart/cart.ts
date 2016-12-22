import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';


var items = [];
items.push({"itemCode":1001,"itemName":"Paneer Butter Masala","itemQuantity": 4,"itemPrice":90});
items.push({"itemCode":1002,"itemName":"Channa Butter Masala","itemQuantity": 1,"itemPrice":70});
items.push({"itemCode":1003,"itemName":"Chicken Masala","itemQuantity": 1,"itemPrice":120});
localStorage.setItem('myCart', JSON.stringify(items));
//var info = JSON.parse(localStorage.getItem("itemsInfo"));
//console.log(info[0]);
console.log();


@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

  
  info = JSON.parse(localStorage.getItem("myCart"));
  constructor(public navCtrl: NavController,
  public alertCtrl: AlertController,
  ) {  } 

  doPrompt() {
    //console.log((JSON.parse(localStorage.getItem("myCart")))[0]);
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
            console.log('Save clicked');
          }
        }
      ]
    });
    prompt.present();
  }
  
  price() {
    var info = JSON.parse(localStorage.getItem("myCart"));
    var i = 0;
    var sum=0;
    while(i<info.length) {
      sum += info[i].itemQuantity*info[i].itemPrice;  
      i++; 
    }
  //this.price=sum;
  }

  addFunction(code) {
    var info = JSON.parse(localStorage.getItem("myCart"));
    var i = 0;
    var flag = -1;
    while(i<info.length) {
      if(info[i].itemCode==code) {
        flag = i;
        break;
      }
    i++; 
    } 
    var item = JSON.parse(localStorage.getItem("myCart"));  
    item[flag].itemQuantity +=1;
    localStorage.setItem("myCart", JSON.stringify(item));
    //document.getElementById("1001").innerHTML  = info.itemQuantity;
    console.log((JSON.parse(localStorage.getItem("myCart")))[0]);
  }

  minusFunction(code) {
    //document.getElementById("item_count_12").innerHTML  = "red";
    var info = JSON.parse(localStorage.getItem("myCart"));
    //var x = info[0].itemQuantity +1
    var i = 0;
    var flag = -1;
    while(i<info.length)  {
      //checks if item aldready in cart and returns the position of that object if exists
      if(info[i].itemCode==code)  {
        flag = i;
        break;
      }
      i++; 
    } 
    var item = JSON.parse(localStorage.getItem("myCart"));  
    if(item[flag].itemQuantity > 1) {
      //console.log(item[flag].itemQuantity);
      item[flag].itemQuantity -=1;
    }
    else  {
      item.splice(flag, 1);
    }
    localStorage.setItem("myCart", JSON.stringify(item));
    console.log((JSON.parse(localStorage.getItem("myCart")))[0]);
             
    //document.getElementById("item_count_12").innerHTML  = "red";
    //console.log(info.length) ;
  }

}
