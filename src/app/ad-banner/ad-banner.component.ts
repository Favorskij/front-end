import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { AdItem } from "../ad-item";
import { AdDirective } from "../ad.directive";
import { AdComponent } from "../ad.component";

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit, OnDestroy {

  @Input()
  ads: AdItem[] = [];

  currentAdIndex = -1;

  @ViewChild(AdDirective, {static: true})
  adHost!: AdDirective;

  interval: number|undefined;

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {

    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>(adItem.component);
    componentRef.instance.data = adItem.data;

  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

}
