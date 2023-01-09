import { Component, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { MessageService } from "../message.service";

@Component({
  selector: 'app-service-child',
  templateUrl: './service-child.component.html',
})
export class ServiceChildComponent implements OnDestroy {

  parentMessage = '';

  subscription: Subscription;

  constructor(private service: MessageService) {

    // Получаем все значения parent из сервиса
    this.subscription = service.parent.subscribe(parentValue => {
        this.parentMessage = parentValue;
    });
  }



  sendMessage() {
    this.service.messageChild('От ребёнка к родителю');
  }

  ngOnDestroy() {
    // Предотвратить утечку памяти при уничтожении компонента
    this.subscription.unsubscribe();
  }


}
