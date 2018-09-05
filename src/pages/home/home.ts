import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Weather: any;
 public weatherLocaltion = {'weather':null};

  constructor(public nav: NavController, 
    public WeatherProvider:WeatherProvider) {

      // khi vao page nay se tu dong goi function getWeather de get du lieu
      // tim hieu ve constructor
      console.log('HomePage');
      this.getWeather('Ha Noi','VN'); 
     

  }
  ionViewWillEnter()
  {
   
    }
   
    getWeather(city:string='' ,country: string ='')
    { 
      console.log('get api');
      this.WeatherProvider.city(city,country)
      .map(data => data.json())
      .subscribe(data=> {
        console.log('this.weatherList ', data);
        this.weatherLocaltion = data;
        
       },
       err => console.log(err),
       ()=>console.log('getweather completed'),

      )
    }
    ;
}
