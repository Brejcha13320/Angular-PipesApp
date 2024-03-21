import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.scss',
})
export class BasicPageComponent {
  nameLowercase: string = 'jesus david mejia vergara';
  nameUppercase: string = 'JESUS DAVID MEJIA VERGARA';
  nameTitlecase: string = 'JeSuS dAvId MeJiA VeRgArA';
  customDate: Date = new Date();
}
