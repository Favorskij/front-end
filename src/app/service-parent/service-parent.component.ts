import {Component, OnDestroy} from '@angular/core';
import { Subscription } from "rxjs";

import { MessageService } from "../message.service";

@Component({
  selector: 'app-service-parent',
  templateUrl: './service-parent.component.html',
  providers: [MessageService]
})
export class ServiceParentComponent implements OnDestroy{


  childMessage: string = '';

  subscription: Subscription;


  constructor(private service: MessageService) {

    // Получаем все значения child из сервиса
    this.subscription = service.child.subscribe(childValue => {
      this.childMessage = childValue;
    });

  }


  sendMessage() {
    this.service.messageParent('От родителя к ребёнку');
  }

  ngOnDestroy() {
    // Предотвратить утечку памяти при уничтожении компонента
    this.subscription.unsubscribe();
  }

}
