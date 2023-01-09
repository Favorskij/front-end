import { Component } from '@angular/core';

@Component({
  selector: 'app-broadcast-parent',
  templateUrl: './broadcast-parent.component.html'
})
export class BroadcastParentComponent {

  parentMessage = 'Это данные из родительского к дочернему'

}
