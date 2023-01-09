import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cast-child',
  templateUrl: './cast-child.component.html',
})
export class CastChildComponent {

  // Отправляем данные родителю boolean.
  @Output()
  notify = new EventEmitter<boolean>();

  // Отправляем данные родителю String.
  @Output()
  notifyString = new EventEmitter<String>();


  vote(agreed: boolean) {
    this.notify.emit(agreed);
  }

  voteString(agreed: String) {
    this.notifyString.emit(agreed);
  }

}
