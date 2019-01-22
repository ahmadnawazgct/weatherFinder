import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  API_KEY = '3280514007c09ccf3717652262d488a9';

  constructor(public http: HttpClient) { }
  getWeather(city, country) {
    console.log(city, country);
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${this.API_KEY}&units=metric`)
    .pipe(map(res => console.log(res)));
  }
}
