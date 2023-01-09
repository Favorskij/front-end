import {Directive, HostBinding} from '@angular/core';

@Directive({
  // button[] слово button это указывает на имя узла. Его указывать необязательно.
  selector: 'button[toggleButton], p[paragraph], div[divContent], h4[h4Content]'
})
export class DirectiveIdDirective {

  // Данные директивы добавляют в узлы (DOM) (которые указаны выше в аннотации @Directive) атрибуты

  @HostBinding('attr.my-select')
  mySelect = false;

  @HostBinding('attr.my-top-select')
  myTopSelect = true;

  @HostBinding('attr.style')
  myColorStyle = 'color:red'



  // Вот таким способом color:red присвоиться во все атрибуты.

  // @HostBinding('attr.my-select')
  // @HostBinding('attr.my-top-select')
  // @HostBinding('attr.style')
  // myColorStyle = 'color:red'

}
