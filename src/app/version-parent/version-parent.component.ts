import { Component } from '@angular/core';

@Component({
  selector: 'app-version-parent',
  templateUrl: './version-parent.component.html',
})
export class VersionParentComponent {


  // Данные которые изменяем
  major = 1;
  minor = 23;


  newMajor() {
    this.major++;
    this.minor = 0;
  }


  newMinor() {
    this.minor++;
  }


}
