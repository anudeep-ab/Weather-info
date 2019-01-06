import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient:HttpClient) { }
  getWeatherInfo(){
    return this.httpClient.get("https://j9l4zglte4.execute-api.us-east-1.amazonaws.com/api/ctl/weather");
  }
}
