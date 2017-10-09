import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { SiteSearchComponent } from './site-search/site-search.component';
import { UniquePipe } from './common/pipes/unique.pipe';
import { SiteFilterPipe } from './site-search/site-filter.pipe';
import { PhonePipe } from './common/pipes/phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SocialComponent,
    SiteSearchComponent,
    UniquePipe,
    SiteFilterPipe,
    PhonePipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
