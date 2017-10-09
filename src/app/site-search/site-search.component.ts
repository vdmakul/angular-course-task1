import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { travelSites } from '../data/data';

@Component({
  selector: 'app-site-search',
  templateUrl: './site-search.component.html',
  styleUrls: ['./site-search.component.css']
})
export class SiteSearchComponent implements OnInit {


  public travelSites: TravelSite[] = travelSites;
  public types: string[] = travelSites.map(s => s.type);

  public site: TravelSite;

  @Output()
  public selectedSite: EventEmitter<TravelSite> = new EventEmitter();

  public selectSite(site: TravelSite): void {
    this.site = site;
    this.selectedSite.emit(site);
  }

  constructor() { }

  public ngOnInit() {
    this.selectSite(this.travelSites[0]);
  }

}
