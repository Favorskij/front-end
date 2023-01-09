import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { Item, item as items } from "../item";

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
})
export class ItemPageComponent implements OnInit {

  // Тут наш предмет
  item: Item | undefined;

  // ActivatedRoute содержит информацию о маршруте и его параметрах.
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    // Для доступа к параметрам маршрута, необходимо использовать route.snapshot.
    // Поэтому, мы сначала получаем идентификатор предмета из текущего маршрута.
    // В данном случаи мы пытаемся получить динамический идентификатор под название itemId
    // который мы задали в app-routing.module.ts
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('itemId'));

    // Пытаемся найти предмет по id
    this.item = items.find(product => product.id === productIdFromRoute);



  }
}
