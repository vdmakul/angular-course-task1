import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  public socialInfo: SocialInfo = {
    'title': 'Nam libero voluptatem',
    'img': 'assets/images/b1.jpg',
    'followers': 2850,
    'following': 675,
  };

  constructor() { }

  ngOnInit() {
  }

}
