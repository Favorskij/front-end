import { Type } from '@angular/core';

export class DynamicItem {

  // Объект в котором хранится загружаемый компонент (объект) и данные для этого компонента

  // Компонент
  public component: Type<any>

  // Данные компонента
  public data: any

  public myString:any;


  // constructor(public component: Type<any>, public data: any) {}
  constructor(component: Type<any>, data: any, myString:any) {
    this.component = component
    this.data = data
    this.myString = myString
  }

}
