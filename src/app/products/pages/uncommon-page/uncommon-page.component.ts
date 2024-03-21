import { Component } from '@angular/core';
import { Observable, Subject, delay, interval, of, switchMap, tap } from 'rxjs';

type Gender = 'male' | 'female';
interface Person {
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.scss',
})
export class UncommonPageComponent {
  //Global Variables
  clientsOriginal: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Hernando',
    'Eduardo',
    'Melissa',
    'Natalia',
  ];

  //i18nSelect
  name: string = 'Jesus David';
  gender: Gender = 'male';
  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.name === 'Jesus David' && this.gender === 'male') {
      this.name = 'Lina Marcela';
      this.gender = 'female';
    } else {
      this.name = 'Jesus David';
      this.gender = 'male';
    }
  }

  //i18nPlural
  clients: string[] = [...this.clientsOriginal];
  clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    other: 'tenemos # clientes esperando.',
  };

  deleteClient() {
    if (this.clients.length > 0) {
      this.clients.pop();
    } else {
      this.clients = this.clientsOriginal;
    }
  }

  //Slice
  clientsSlice: string[] = [...this.clientsOriginal];

  //KeyValue
  person: Person = {
    name: 'Jesus David',
    age: 24,
    address: 'Cali, Colombia',
  };

  //Async
  myObservableTime = interval(2000);

  get Person$(): Observable<Person> {
    return of(this.person);
  }

  promiseValue: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
    }, 2000);
  });
}
