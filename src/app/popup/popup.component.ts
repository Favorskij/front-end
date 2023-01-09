import {Component, EventEmitter, HostBinding, Input, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],

  // Анимация, которая применяется к компоненту
  animations: [

    trigger('state', [

      // Точка появления компонента.
      // opacity резкость появления из прозрачности
      // transform точка где начинает появляться компонент
      state('void, closed', style({transform: 'translateY(100%)', opacity: 100})),

      // Конечная точка назначения компонента
      state('opened', style({transform: 'translateY(7100%)'})),

      // Скорость движения компонента
      // по поводу ease-in смотрите ссылку
      // https://developers.google.com/web/fundamentals/design-and-ux/animations/the-basics-of-easing?hl=ru
      transition('* => *', animate('400ms ease-in')),
    ])
  ],

})
export class PopupComponent {

  private _message = '';

  @HostBinding('@state')

    // Эти параметры можно называть в произвольной форме. Главное, что бы они соответствовали animations
    // тип 'opened' или 'closed'
  state: 'opened' | 'closed' = 'closed';


  @Input()
  get message(): string {
    return this._message;
  }

  set message(message: string) {
    this._message = message;
    this.state = 'opened';
  }


  // Событие отправляется в PopupService через родительский компонент
  @Output()
  closed = new EventEmitter<void>();

}
