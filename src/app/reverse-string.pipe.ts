import { Pipe, PipeTransform } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Pipe({
  name: 'reverseString',
  pure: true
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: string, concat: string): string {
    //let exp = parseFloat(exponent); -> To convert string to number
    let uppercase = new UpperCasePipe();
    let str = value.split('').reverse().join('') + concat;
    return uppercase.transform(str);
  }
}
