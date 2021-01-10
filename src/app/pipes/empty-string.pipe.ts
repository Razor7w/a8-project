import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyString'
})
export class EmptyStringPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log('arguments pipe emptyString --> ', args);
    return '';
  }

}
