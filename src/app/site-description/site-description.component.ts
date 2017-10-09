import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-site-description',
  templateUrl: './site-description.component.html',
  styleUrls: ['./site-description.component.css']
})
export class SiteDescriptionComponent implements OnInit {

  @Input()
  public travelSite: TravelSite;

  @Output()
  public onSelect: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
