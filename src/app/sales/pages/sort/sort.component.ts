import { Component } from '@angular/core';

import { Color, Hero } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styles: [],
})
export class SortComponent {
  fly: boolean = true;
  inUppercase: boolean = false;
  toggleOption: string = '';
  sortBy: string = '';
  heroes: Hero[] = [
    {
      name: 'Ironman',
      fly: true,
      color: Color.red,
    },
    {
      name: 'Wolverine',
      fly: false,
      color: Color.yellow,
    },
    {
      name: 'Hulk',
      fly: false,
      color: Color.green,
    },
    {
      name: 'Deadpool',
      fly: false,
      color: Color.red,
    },
    {
      name: 'Doctor Strange',
      fly: true,
      color: Color.blue,
    },
  ];

  toggleUpper() {
    this.inUppercase = !this.inUppercase;

    this.inUppercase
      ? (this.toggleOption = 'Lowercase')
      : (this.toggleOption = 'Upercase');
  }

  changeSort(value: string) {
    this.sortBy = value;
  }
}
