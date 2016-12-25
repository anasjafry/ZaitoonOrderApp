import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-orderdetails',
  templateUrl: 'orderdetails.html'
})
export class OrderdetailsPage {

  x:Array<any>;
  public price:number;
  public tax:number;
  public total:number;

  constructor(public navCtrl: NavController,
    public params: NavParams
    ) {
    this.x = this.params.get('item');
  }

  cartsum(){
  	this.price = 0;
  	//this.x = this.params.get('item');
  	//var item= this.x
  	//console.log(this.x.orderID);
	// while(i<info.length) {
	// 	this.price += info[i].itemQuantity*info[i].itemPrice;
	// 	i++; 
	// }
	// this.tax=Math.round(0.07*this.price*100)/100;
	// this.total=this.tax+this.price;
  }

  ionViewWillEnter() {
      this.cartsum();
  }
	  

}
