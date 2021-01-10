import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'semicolonForSpace'
})
export class SemicolonForSpacePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const trimed: any = value.replace(';', ' ').trim();
    console.log('arguments pipe semicolonForSpace --> ', args);
    return trimed;
  }

}
