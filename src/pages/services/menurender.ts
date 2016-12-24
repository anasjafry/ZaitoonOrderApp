import {Http,Response,Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
//import {Http, Response} from 'angular2/http';
//import {Headers, RequestOptions} from 'angular2/http';
  
export class MenuService {  
    static get parameters() {
        return [[Http]];
    }
  
    constructor(private http:Http) {
         
    }
  
    getmenu() {
        var url = 'http://localhost/vega-web-app/online/getmenu.php';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

    getitems() {
        var url = 'http://localhost/vega-web-app/online/getitems.php';
        var response = this.http.get(url).map(res => res.json());
        return response;
    }

    checkout() {
        var url = 'http://localhost/vega-web-app/online/createorder.php';
        
        var info = JSON.parse(localStorage.getItem("myCart"));
        var i = 0;
        var items=[];
        var cart;
        var sub_total=0;
        while(i<info.length)   {
            sub_total += (info[i].itemQuantity*info[i].itemPrice);
            items.push({
                "itemCode": info[i].itemCode,
                "itemName": info[i].itemName,
                "itemQuantity": info[i].itemQuantity,
                "itemPrice": info[i].itemPrice,
                "itemVariety": info[i].itemVariety
            });
            i++;
        }
        cart = {
            "cartTotal": sub_total,
            "cartCoupon": 0,
            "items": items
        };


        var data = {"user":"9043960876","cart":JSON.stringify(cart)}; 
        // data.user = "9043960876";
        // data.cart = JSON.stringify(cart);
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers, method: "post" });
        
        var response = this.http.post(url, data,options)
            .map(res => res.json());
        return response;    
    }

    orderhistory() {
        var url = 'http://localhost/vega-web-app/online/orderhistory.php';

        var data = {"user":"9043960876"}; 
        // data.user = "9043960876";
        // data.cart = JSON.stringify(cart);
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers, method: "post" });
        
        var response = this.http.post(url, data,options)
            .map(res => res.json());
        return response;  
    }

}