import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';

import { WeatherForecast } from './models/weatherForecast.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Frontend';
  weather: WeatherForecast;

  constructor(private service: ApiService) {
  }

  public ngOnInit() :  void{
    this.service.getForecast().subscribe(items => this.weather = items[0]);
  }
  public onClick(): void {
    this.service.getForecast().subscribe(items => this.weather = items[0]);
  }
}
