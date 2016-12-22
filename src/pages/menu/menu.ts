import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { MenuService} from '../services/menurender';
import { SubmenuPage } from './submenu/submenu';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
  providers: [MenuService]
})
export class MenuPage {
	menulist: Array<any>;
  constructor(public navCtrl: NavController,
  	private menuService: MenuService,
    params: NavParams
  	) {  
    this.menulist = params.data.menulist;
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

}
