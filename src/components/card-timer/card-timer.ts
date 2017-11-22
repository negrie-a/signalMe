import { Component, Input } from '@angular/core';

/**
 * Generated class for the CardTimerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card-timer',
  templateUrl: 'card-timer.html'
})
export class CardTimerComponent {

  @Input() date: string;
  @Input() time: string;
  @Input() icon: string;

  text: string;

  constructor() {
    console.log('Hello CardTimerComponent Component');
    this.text = 'Hello World';
  }
}
