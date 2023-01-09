import { Component, OnInit, ViewChild } from '@angular/core';

import { DynamicItem } from "../dynamicItem";
import { DynamicDirective } from "../dynamic.directive";
import { DynamicProfileComponent } from "../dynamic-profile/dynamic-profile.component";
import { DynamicComponent } from "../dynamic.component";

@Component({
  selector: 'app-dynamic-banner',
  templateUrl: './dynamic-banner.component.html',
  styleUrls: ['./dynamic-banner.component.css']
})
export class DynamicBannerComponent implements OnInit {

  // Поучаем доступ к дочернему компонента
  // {static: true} => это включаем или выключаем отображение компонента. По умолчанию false
  @ViewChild(DynamicDirective, {static: true})
  adHost!: DynamicDirective;


  // Это массив объектов
  ads: DynamicItem[] = [
    // Создали объект и поместили в него компонент и данные для этого компонента
    new DynamicItem(DynamicProfileComponent,{ name: 'Майкл Джексон', bio: 'Billie Jean' }, 'Просто строка')

  ];







  ngOnInit() {


    // Получаем ViewContainerRef и присваиваем в переменную
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear()



    // Создает для ViewContainerRef экземпляр компонента типа AdComponent и передаёт этот экземпляр в
    // указанный компонент, в данном случаи в this.ads[0].component
    const componentRef = viewContainerRef.createComponent<DynamicComponent>(this.ads[0].component);
    // const componentRef = viewContainerRef.createComponent<HeroProfileComponent>(HeroProfileComponent);
    // const componentRef = viewContainerRef.createComponent<HeroProfileComponent>(this.ads[0].component);
    // const componentRef = viewContainerRef.createComponent<AdComponent>(HeroProfileComponent);



    // В созданный экземпляр типа AdComponent передаём нужные нам параметры. В данном случаи из AdItem.data
    componentRef.instance.data = this.ads[0].data;
    componentRef.instance.myString1 = this.ads[0].myString;
    componentRef.instance.myString2 = 'Это моя вторая строка';



    // или укорочено


    // const viewContainerRef = this.adHost.viewContainerRef.createComponent<AdComponent>(this.ads[0].component);
    //
    // viewContainerRef.instance.data = this.ads[0].data;
    //
    // viewContainerRef.instance.myString = this.ads[0].myString;



  }

}
