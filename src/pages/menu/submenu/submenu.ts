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


}
