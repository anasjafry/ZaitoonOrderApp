import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { MenuService } from '../services/menurender';

//Creating an Empty Cart, if it doesn't exist already.
if(!localStorage.getItem('myCart')){
  var items = [];
  localStorage.setItem('myCart', JSON.stringify(items));
}


@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
  providers: [MenuService]
})
export class CartPage {
    postData:string;
    public flag:Boolean;
    public info:Array<any>;
    public price:number;
    public tax:number;
    public total:number;

  constructor(public navCtrl: NavController,
  public alertCtrl: AlertController,
  private menuService: MenuService
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

  ionViewWillEnter() {
      this.renderCart();
  }
  

  renderCart(){
    
    this.info = JSON.parse(localStorage.getItem("myCart"));

    //Find the sum and then assign
    if(localStorage.getItem("myCart") === null || (JSON.parse(localStorage.getItem("myCart"))).length<1)
    {
      this.flag=false;
    }
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
             
    this.renderCart();
  }

  placeorder() {
    this.menuService.checkout().subscribe(//call the post
    data => this.postData = JSON.stringify(data), // put the data returned from the server in our variable
    error => console.log("Error HTTP Post Service"), // in case of failure show this message
    () => console.log("Job Done Post !")//run this code in all cases
    );
  }

}
