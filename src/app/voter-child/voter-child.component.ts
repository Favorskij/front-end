import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-voter-child',
  templateUrl: './voter-child.component.html',
})
export class VoterChildComponent {

  @Input()  name = '';
  @Output() voted = new EventEmitter<boolean>();

  didVote = false;

  constructor() { }

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }

}
