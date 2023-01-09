import { Component } from '@angular/core';

@Component({
  selector: 'app-name-parent',
  templateUrl: './name-parent.component.html',
})
export class NameParentComponent {


  // Displays 'Джек потрошитель', '<no name set>', 'Майкл Джексон'
  names = ['Джек потрошитель', '   ', '  Майкл Джексон  '];

}
