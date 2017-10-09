import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: number): string {
    const phoneNumber = phone.toString();
    if (phoneNumber.length < 5) {
      return `Tel: ${phoneNumber}`;
    } else {
      return `Tel: ${this.sliceBy3(phoneNumber)}`;
    }
  }

  private sliceBy3(val: string): string {
    if (val.length < 3) {
      return val;
    } else {
      const tail = this.sliceBy3(val.substr(4, val.length));
      return `${val.slice(0, 3)} ${tail}`;
    }
  }

}
