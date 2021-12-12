import { Component } from '@angular/core';

import { interval } from 'rxjs';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styles: [],
})
export class NotCommonsComponent {
  //i18nSelect
  name: string = 'Ezequiel';
  gender: string = 'male';
  invitationMap = {
    male: 'gentleman',
    female: 'lady',
  };

  //i18nPlural
  clients: string[] = ['Maria', 'Joe', 'Peter', 'Charlie'];
  clientsMap = {
    '=0': "don't have any client waiting",
    '=1': 'have one client waiting',
    other: 'have # clients waiting',
  };

  changeName() {
    this.name = 'Clara';
    this.gender = 'female';
  }

  deleteClient() {
    this.clients.pop();
  }

  // KeyValue Pipe

  person = {
    name: 'Ezequiel',
    age: 29,
    address: 'Buenos Aires, Argentina',
  };

  // Json Pipe

  heroes = [
    {
      name: 'Thor',
      flies: true,
    },
    {
      name: 'Daredevil',
      flies: false,
    },
    {
      name: 'Wolverine',
      flies: true,
    },
  ];

  //Async Pipe

  myObservable = interval(1000); // 0,1,2,3,4,...,n+1
  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('We have promise data');
    }, 3500);
  });
}
