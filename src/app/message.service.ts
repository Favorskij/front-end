import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // Наблюдаемые строковые источники
  // Observable string источники
  // Observable string sources
  private parentSource = new Subject<string>();
  private childSource = new Subject<string>();

  // Наблюдаемые строковые потоки
  // Observable string потоки
  // Observable string streams
  parent = this.parentSource.asObservable();
  child = this.childSource.asObservable();


  messageParent(parentValue: string) {
    this.parentSource.next(parentValue);
  }

  messageChild(childValue: string) {
    this.childSource.next(childValue);
  }

}
