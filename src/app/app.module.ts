import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { SiteSearchComponent } from './site-search/site-search.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SocialComponent,
    SiteSearchComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
