import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
    private appId='85ba9d5738d58943c8784870298cb495';
     private baseUrl='https://api.openweathermap.org/data/2.5/';
  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
   
  }
     city(city:string ,country:string)
     {
        let url=this.baseUrl+'weather';
        url+='?appId='+this.appId;
        url+='&q='+city; // & not %  
        url+=','+country;
         return this.http.get(url);
     }
  

}
