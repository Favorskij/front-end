import { Component } from '@angular/core';

@Component({
  selector: 'app-cast-parent',
  templateUrl: './cast-parent.component.html',
})
export class CastParentComponent {



  button1() {
    window.alert('1 - Родитель получил событие');
  }

  button2() {
    window.alert('2 - Родитель получил событие');
  }

  button3(agreed: String) {
    window.alert(agreed);
  }

  conNotify(agreed: boolean) {

    if (agreed) {
      this.button2()
    } else {
      this.button1()
    }
  }


  conNotifyString(agreed: String) {

    this.button3(agreed)

  }

}
