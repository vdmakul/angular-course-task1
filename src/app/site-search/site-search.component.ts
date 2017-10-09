import { Component, OnInit } from '@angular/core';
import { travelSites } from '../data/data';

@Component({
  selector: 'app-site-search',
  templateUrl: './site-search.component.html',
  styleUrls: ['./site-search.component.css']
})
export class SiteSearchComponent implements OnInit {


  public travelSites: TravelSite[] = travelSites;

  public selectedSite: TravelSite;

  public siteClick(site: TravelSite): void {
    this.selectedSite = site;
  }

  constructor() { }

  public ngOnInit() {
    this.selectedSite = this.travelSites[0];
  }

}
