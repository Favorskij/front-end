import {Component, Directive, HostListener, Injector, OnInit, TemplateRef} from '@angular/core';
import { createCustomElement } from '@angular/elements';

import {HostListenerComponent} from "./host-listener/host-listener.component";
import {AdItem} from "./ad-item";
import {AdService} from "./ad.service";
import {PopupService} from "./popup.service";
import { PopupComponent } from "./popup/popup.component";



// Это компонент
// ad-banner
// hero-job-ad
// hero-profile
// ad.directive.ts
// ad.service.ts
// ad-item.ts


// Этот компонент для ad-banner, hero-profile, hero-profile,
// ad.directive.ts, ad.service.ts, ad-item.ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
// Это для Dynamic component loader
export class AppComponent implements OnInit {

  ads: AdItem[] = [];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

}




// zippy-template
// Это директива для zippy-template
@Directive({
  selector: 'ng-template[appContent]'
})
export class ZippyContentDirective {


  // Сюда попадает шаблон. В данном случаи тут текст => "Мой шаблон"
  constructor(public templateRef: TemplateRef<unknown>) {}
  // constructor(public templateRef: TemplateRef<string>) {}

}
