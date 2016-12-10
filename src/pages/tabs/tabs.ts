import { Component } from '@angular/core';

import { MenuPage } from '../menu/menu';
import { CartPage } from '../cart/cart';
import { HistoryPage } from '../history/history';
import { AccountPage } from '../account/account';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MenuPage;
  tab2Root: any = CartPage;
  tab3Root: any = HistoryPage;
  tab4Root: any = AccountPage;

  constructor() {

  }
}
