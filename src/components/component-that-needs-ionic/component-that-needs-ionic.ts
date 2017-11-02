import { Component } from '@angular/core';

/**
 * Generated class for the ComponentThatNeedsIonicComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'component-that-needs-ionic',
  templateUrl: 'component-that-needs-ionic.html'
})
export class ComponentThatNeedsIonicComponent {

  text: string;

  constructor() {
    console.log('Hello ComponentThatNeedsIonicComponent Component');
    this.text = 'Hello World';
  }

}
