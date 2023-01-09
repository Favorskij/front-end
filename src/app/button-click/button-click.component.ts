import { Component } from '@angular/core';

@Component({
  selector: 'app-button-click',
  templateUrl: './button-click.component.html',
})
export class ButtonClickComponent {

  message = 'Привет мир!';

  sayMessage() {
    alert(this.message);
  }

}
