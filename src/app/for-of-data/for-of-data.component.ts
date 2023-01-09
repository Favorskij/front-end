import { Component } from '@angular/core';
import { item, Item } from "../item";

@Component({
  selector: 'app-for-of-data',
  templateUrl: './for-of-data.component.html',
})
export class ForOfDataComponent {

  arrayItem:string[] = ['Иван','Игорь','Виталий','Максим','Геннадий']

  arrayObjectItem:Item[] = item

}
