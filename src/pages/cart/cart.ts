import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
//import * as globs from '../../globals';

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

    public flag:Boolean;
    public info:Array<any>;
    public price:number;
    public tax:number;
    public total:number;

  constructor(public navCtrl: NavController,
  public alertCtrl: AlertController
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
  

  renderCart(){
    
    this.info = JSON.parse(localStorage.getItem("myCart"));

    //Find the sum and then assign
    if(localStorage.getItem("myCart") === null || (JSON.parse(localStorage.getItem("myCart"))).length<1)
    {this.flag=false;}
    else{
      this.flag=true
      this.price = 0;
      var i = 0;
      var info = JSON.parse(localStorage.getItem("myCart"));
      while(i<info.length) {
        this.price += info[i].itemQuantity*info[i].itemPrice;
        i++; 
      }
      this.tax=Math.round(0.07*this.price*100)/100;
      this.total=this.tax+this.price;
    } 
  }


  public ngOnInit(): any
    {
        this.renderCart();
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

    this.renderCart();
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
    this.renderCart();
  }

}
