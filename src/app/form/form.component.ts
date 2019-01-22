import { Component, OnInit } from '@angular/core';
import { Model} from '../address/model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  city = '';
  country = '';
  weather: any = {};
  disable = true;
  able  = true;

  error = 'please enter city and corresponding country code';
 API_KEY = '3280514007c09ccf3717652262d488a9';

  constructor(public http: HttpClient) { }
  onSubmit(address: Model) {

    this.city = address.city;
    this.country = address.country;
    if (this.city && this.country) {
    this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.API_KEY}&units=metric`)
   .subscribe(data => {
     console.log(data);
     this.weather = data;
     console.log(this.weather);
    });
   }
  }

    ngOnInit() {
        }
 }


