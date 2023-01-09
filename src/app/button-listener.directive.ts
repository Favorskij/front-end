import {Directive, HostListener} from '@angular/core';
import {HostListenerComponent} from "./host-listener/host-listener.component";

@Directive({
  selector: 'button[hostListenerButton], p[paragraphListener]'
})
export class ButtonListenerDirective {

  constructor(public listenerHost: HostListenerComponent) { }

  @HostListener('click')
  listHost() {
    this.listenerHost.hostListenerName = 'Игорь';
  }

}
