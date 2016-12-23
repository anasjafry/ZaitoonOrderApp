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
  items;
  constructor(private menuService: MenuService) { 
    this.initializeItems(); 
  }

  menu() {
            this.menuService.getitems().subscribe(
                data => {
                    this.items = data; 
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
    this.items;
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {

        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


}
