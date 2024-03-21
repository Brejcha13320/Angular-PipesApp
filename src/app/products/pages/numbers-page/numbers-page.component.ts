import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.scss',
})
export class NumbersPageComponent {
  customNumber: number = 2567789.5567;
  customPercent: number = 0.4856;
}
