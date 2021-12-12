import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  nameLower: string = 'EZEQUIEL'
  nameUpper: string = 'ezequiel'
  fullName: string = 'eZeqUIel RomEO'

  date: Date = new Date(); // dia de hoy


}
