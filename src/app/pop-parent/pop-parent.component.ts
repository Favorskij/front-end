import { Component, Injector } from '@angular/core';
import { createCustomElement } from "@angular/elements";
import { PopService } from "../pop.service";
import { PopComponent } from "../pop/pop.component";

@Component({
  selector: 'app-pop-parent',
  templateUrl: './pop-parent.component.html',
})
export class PopParentComponent {

  constructor(injector: Injector, public pop: PopService) {

    // Convert `PopupComponent` to a custom element.
    // Преобразуйте PopupComponent в пользовательский элемент.
    const PopupElement = createCustomElement(PopComponent, {injector});

    // Register the custom element with the browser.
    // Зарегистрируйте пользовательский элемент в браузере.
    // Находит пользовательский <popup-element/> в DOM-е который был создан в PopupService и помещает в него компонент
    customElements.define('pop-element', PopupElement);

  }
}
