import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
  
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
}