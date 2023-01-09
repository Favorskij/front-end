import { Component } from '@angular/core';
import { Hero, HEROES } from '../hero';

@Component({
  selector: 'app-for-of-data-parent',
  templateUrl: './for-of-data-parent.component.html',
})
export class ForOfDataParentComponent {

  heroes: Hero[] = HEROES;

  master: string = 'Мастер';


}
