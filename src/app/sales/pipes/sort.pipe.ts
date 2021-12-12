import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'sort',
})
export class AlphaSortPipe implements PipeTransform {
  transform(heroes: Hero[], sort: string = 'no value'): Hero[] {
    switch (sort) {
      case 'name':
        return (heroes = heroes.sort((a, b) => (a.name > b.name ? 1 : -1)));

      case 'fly':
        return (heroes = heroes.sort((a, b) => (a.fly > b.fly ? 1 : -1)));

      case 'color':
        return (heroes = heroes.sort((a, b) => (a.color > b.color ? 1 : -1)));

      default:
        return heroes;
    }
  }
}
