import { Component } from '@angular/core';

@Component({
  selector: 'app-input-get',
  templateUrl: './input-get.component.html',
})
export class InputGetComponent {

  myInput = ''

  valueInput(setInput:string) {
    this.myInput = setInput
  }

}
