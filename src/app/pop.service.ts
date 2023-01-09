import {ApplicationRef, ComponentFactoryResolver, Injectable, Injector} from '@angular/core';
import { PopComponent } from "./pop/pop.component";
import { NgElement, WithProperties } from "@angular/elements";

@Injectable({
  providedIn: 'root'
})
export class PopService {


  constructor(private injector: Injector, private applicationRef: ApplicationRef, private componentFactoryResolver: ComponentFactoryResolver) {}

  showAsComponent(message: string) {

    // Create element
    const pop = document.createElement('pop-component');

    // Create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(PopComponent);
    const popupComponentRef = factory.create(this.injector, [], pop);

    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(popupComponentRef.hostView);

    // Listen to the close event
    popupComponentRef.instance.closed.subscribe(() => {
      document.body.removeChild(pop);
      this.applicationRef.detachView(popupComponentRef.hostView);
    });

    // Set the message
    popupComponentRef.instance.message = message;

    // Add to the DOM
    document.body.appendChild(pop);
  }




  /*// This uses the new custom-element method to add the popup to the DOM.
  // Этот метод использует новый пользовательский элемент для добавления всплывающего окна в DOM.
  showAsElement(message: string) {


    // Создать элемент
    const popupEl: NgElement & WithProperties<PopComponent> = document.createElement('pop-element') as any;

    // Слушает событие закрытия
    popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));

    // Устанавливает сообщение в PopupComponent
    popupEl.message = message;

    // Добавить в DOM
    document.body.appendChild(popupEl);

  }*/
}
