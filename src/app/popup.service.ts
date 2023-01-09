import { Injectable } from '@angular/core';
import { PopupComponent } from "./popup/popup.component";
import { NgElement, WithProperties } from "@angular/elements";

@Injectable({
  providedIn: 'root'
})
export class PopupService {


  // This uses the new custom-element method to add the popup to the DOM.
  // Этот метод использует новый пользовательский элемент для добавления всплывающего окна в DOM.
  showAsElement(message: string) {


    // Создаём элемент
    const popupEl: NgElement & WithProperties<PopupComponent> = document.createElement('popup-element') as any;

    // Слушает событие закрытия
    popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));

    // Устанавливает сообщение в PopupComponent
    popupEl.message = message;

    // Добавить в DOM
    document.body.appendChild(popupEl);

  }

}
