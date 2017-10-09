import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'siteFilter'
})
export class SiteFilterPipe implements PipeTransform {

  transform(sites: TravelSite[], type?: string): TravelSite[] {
    if (!type) {
      return sites;
    } else {
      return sites.filter(s => s.type === type);
    }
  }

}
