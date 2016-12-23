import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { MenuService} from '../services/menurender';
import { SubmenuPage } from './submenu/submenu';
import { SearchPage } from './search/search';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
  providers: [MenuService]
})
export class MenuPage {
	menulist: Array<any>;
  list: Array<any>;
  constructor(public navCtrl: NavController,
  	private menuService: MenuService,
    params: NavParams
  	) {  
    this.menulist = params.data.menulist;
    this.initializeItems();
  }
  initializeItems(){
    this.list = this.menulist;
  }
  
  menu() {
            this.menuService.getmenu().subscribe(
                data => {
                    this.menulist = data; 
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

  submenu(item){
  	this.navCtrl.push(SubmenuPage, { item:item });
  }

  searchpage(){
    this.navCtrl.push(SearchPage);
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if (val.trim() == '') {
    //   return;
    // }

    // this.items = this.items.filter((v) => {

    // if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
    //    return true;
    //   }

    //   return false;
    // })

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.menulist = this.menulist.filter((item) => {
        //console.log(x.subName);
        //var x: any = item.submenu;
        var name: any = item;
        return (name.mainName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
