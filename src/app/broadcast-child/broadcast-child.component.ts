import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-broadcast-child',
  templateUrl: './broadcast-child.component.html'
})
export class BroadcastChildComponent {

  @Input('master') // Псевдоним master
  // message!: string
  // message: string | undefined
  message = ''


}
