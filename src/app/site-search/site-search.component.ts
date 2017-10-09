import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { travelSites } from '../data/data';

@Component({
  selector: 'app-site-search',
  templateUrl: './site-search.component.html',
  styleUrls: ['./site-search.component.css']
})
export class SiteSearchComponent implements OnInit {


  public travelSites: TravelSite[];
  public types: string[] = travelSites.map(s => s.type);

  public selectedSite: TravelSite;

  @Output()
  public onSiteSelect: EventEmitter<TravelSite> = new EventEmitter();

  public selectSite(site: TravelSite): void {
    this.selectedSite = site;
    this.onSiteSelect.emit(site);
  }

  public selectType(type: string): void {
    this.travelSites = travelSites.filter(s => type == null || s.type === type);
    if (this.travelSites.indexOf(this.selectedSite) < 0) {
      this.selectSite(null);
    }
  }

  constructor() { }

  public ngOnInit() {
    this.selectType(null);
  }

}
