import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CartPage } from '../pages/cart/cart';
import { HistoryPage } from '../pages/history/history';
import { MenuPage } from '../pages/menu/menu';
import { AccountPage } from '../pages/account/account';
import { TabsPage } from '../pages/tabs/tabs';
import { OrderdetailsPage } from '../pages/history/orderdetails/orderdetails';
import { TrackPage } from '../pages/history/track/track';
import { AddressPage } from '../pages/account/address/address';

@NgModule({
  declarations: [
    MyApp,
    CartPage,
    HistoryPage,
    MenuPage,
    AccountPage,
    OrderdetailsPage,
    AddressPage,
    TrackPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CartPage,
    HistoryPage,
    MenuPage,
    AccountPage,
    OrderdetailsPage,
    AddressPage,
    TrackPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
