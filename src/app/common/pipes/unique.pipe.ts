import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  transform(items: any[]): any[] {
    if (!items || items.length === 0) {
      return items;
    } else {
      return items.filter((x, i, a) => x && a.indexOf(x) === i);
    }
  }

}
