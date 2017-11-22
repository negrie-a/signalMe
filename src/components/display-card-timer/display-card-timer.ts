import { Component } from '@angular/core';

/**
 * Generated class for the DisplayCardTimerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'display-card-timer',
  templateUrl: 'display-card-timer.html'
})
export class DisplayCardTimerComponent {

  text: string;

  constructor() {
    console.log('Hello DisplayCardTimerComponent Component');
    this.text = 'Hello World';
  }
  
}
