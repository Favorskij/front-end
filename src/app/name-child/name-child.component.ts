import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-child',
  templateUrl: './name-child.component.html',
})
export class NameChildComponent {


  private _name: string = '';


  get name(): string {
    return this._name;
  }

  @Input()
  set name(name: string) {
    // Изменяем входные параметры
    this._name = (name && name.trim()) || '<no name set>';
  }


}
