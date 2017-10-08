import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weather: Weather = {
    'title': 'Et harum quidem',
    'icon': 'assets/images/cloudy.png',
    'water': 20,
    'temperature': 30
  };

  constructor() { }

  ngOnInit() {
  }

}
