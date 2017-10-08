import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-search',
  templateUrl: './site-search.component.html',
  styleUrls: ['./site-search.component.css']
})
export class SiteSearchComponent implements OnInit {

  public travelSite: TravelSite = {
    'img': 'assets/images/1.jpg',
    'address': 'Sed perspiciatis',
    'phone': 1285968685,
    'weather': {
      'title': 'Et harum quidem',
      'icon': 'assets/images/cloudy.png',
      'water': 20,
      'temperature': 30
    },
    'socialInfo': {
      'title': 'Nam libero voluptatem',
      'img': 'assets/images/b1.jpg',
      'followers': 2850,
      'following': 675,
    },
    'type': 'Hotel'
  };

  constructor() { }

  ngOnInit() {
  }

}
