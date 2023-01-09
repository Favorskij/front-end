import { Component, Injector } from '@angular/core';
import { createCustomElement } from "@angular/elements";
import { PopupService } from "../popup.service";
import { PopupComponent } from "../popup/popup.component";

@Component({
  selector: 'app-popup-parent',
  templateUrl: './popup-parent.component.html',
})
export class PopupParentComponent {

  constructor(injector: Injector, public popup: PopupService) {

    // Convert `PopupComponent` to a custom element.
    // Преобразуйте PopupComponent в пользовательский элемент.
    const PopupElement = createCustomElement(PopupComponent, {injector});

    // Register the custom element with the browser.
    // Зарегистрируйте пользовательский элемент в браузере.
    // Находит пользовательский <popup-element/> в DOM-е который был создан в PopupService и помещает в него компонент
    customElements.define('popup-element', PopupElement);

  }

}
