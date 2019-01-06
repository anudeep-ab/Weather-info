
import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  dayData:any=[];
  presentData:any=[];
  hourData:any=[];
  weatherData=false;
  constructor(private weatherService:WeatherService,private spinner: NgxSpinnerService ) { 

  }

  ngOnInit() {
    this.spinner.show();
    this.weatherService.getWeatherInfo()
    .subscribe((res:any)=> {
      this.weatherData=true
      this.dayData = res.daily;
      this.presentData=res.today;
      this.hourData=res.hourly;
      this.spinner.hide();
    })
  }

}
