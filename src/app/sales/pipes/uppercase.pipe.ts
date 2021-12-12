import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUppercase',
})
export class UppercasePipe implements PipeTransform {
  transform(value: string, inUppercase: boolean = true): string {
    return inUppercase ? value.toUpperCase() : value.toLowerCase();
  }
}
