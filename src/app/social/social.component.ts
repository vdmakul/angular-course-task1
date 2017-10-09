import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  @Input()
  public socialInfo: SocialInfo;

  constructor() { }

  ngOnInit() {
  }

}
