import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { MenuService } from '../../services/menurender';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  providers: [MenuService]
})
export class SearchPage {
  //itemslist: Array<any>;
  items; masterList;
  constructor(private menuService: MenuService) { 
    this.initializeItems(); 
  }

  menu() {
            this.menuService.getitems().subscribe(
                data => {
                    this.items = data;
                    this.masterList = data; 
                    console.log(data);
                },
                err => {
                    console.log(err);
                },
                () => console.log('Menu Render Complete')
            );
    }

  public ngOnInit(): any
    {
        this.menu();
    }

  initializeItems() {
    this.items = this.masterList;
  }
  getItems(ev: any) {
    console.log(ev.target.value);
    console.log(this.items);
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {

        return (item.itemName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
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
