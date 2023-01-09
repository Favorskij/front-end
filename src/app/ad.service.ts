import { Injectable } from '@angular/core';

import { HeroProfileComponent } from "./hero-profile/hero-profile.component";
import { HeroJobAdComponent } from "./hero-job-ad/hero-job-ad.component";
import { AdItem } from "./ad-item";

@Injectable({
  providedIn: 'root'
})
export class AdService {

  getAds() {
    return [

      new AdItem(
        HeroProfileComponent,
        { name: 'Че Гевара', bio: 'Красный зверь' }
      ),

      new AdItem(
        HeroProfileComponent,
        { name: 'Майкл Джексон', bio: 'Billie Jean' }
      ),

      new AdItem(
        HeroJobAdComponent,
        { headline: 'Работа', body: 'Требуется программист' }
      ),

      new AdItem(
        HeroJobAdComponent,
        { headline: 'Авиабилеты', body: 'Сахалин - Москва' }
      )
    ];
  }
}
