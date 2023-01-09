import { Component, Input } from '@angular/core';
import { Hero } from "../hero";

@Component({
  selector: 'app-for-of-data-child',
  templateUrl: './for-of-data-child.component.html',
})
export class ForOfDataChildComponent {

  @Input()
    // hero: Hero | undefined;
  hero!: Hero;


  // Псевдоним master для родителя
  @Input('master')
  masterName = ''; // tslint:disable-line: no-input-rename

}
