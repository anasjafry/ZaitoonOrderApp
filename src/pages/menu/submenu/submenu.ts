import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-submenu',
  templateUrl: 'submenu.html'
})
export class SubmenuPage {
   x: Array<any>

  constructor(public navCtrl: NavController,
    public params: NavParams
    ) {
    this.x = this.params.get('item');
  }

  addToCart(code,name,price,variety){
  	if(localStorage.getItem("myCart") === null){
  		var temp = [];
  		localStorage.setItem("myCart", JSON.stringify(temp));
  	}
  	console.log('Adding item :'+code);
  	console.log(JSON.parse(localStorage.getItem("myCart")));

  	var info = JSON.parse(localStorage.getItem("myCart"));


			var i = 0;
            var flag = -1;

            console.log(info.length) ;
            while(i<info.length)
            {
                //checks if item aldready in cart and returns the position of that object if exists
                if(info[i].itemCode==code)
                {
                    flag = i;
                    break;
                }
                i++; 
            }   
            if(flag != -1){
                var item = JSON.parse(localStorage.getItem("myCart"));
                //var info = JSON.parse(localStorage.getItem("myCart"))[x];
                item[flag].itemQuantity +=1;
                localStorage.setItem("myCart", JSON.stringify(item));
                //console.log(info.itemQuantity);
                console.log((JSON.parse(localStorage.getItem("myCart")))[0]);
            }
            else if(flag == -1){
                var oldItems = JSON.parse(localStorage.getItem('myCart')) || [];
                var newItem = {"itemCode":code,"itemName":name,"itemQuantity": 1,"itemPrice":price,"itemVariety":variety};
                oldItems.push(newItem);
                var x = JSON.parse(localStorage.getItem("myCart")) ;
                //console.log(x.itemQuantity);
                localStorage.setItem('myCart', JSON.stringify(oldItems));
                console.log((JSON.parse(localStorage.getItem("myCart")))[3]);
                
            }  	
  }


}
