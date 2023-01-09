import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent, ZippyContentDirective } from './app.component';
import { DataImportExportComponent } from './data-import-export/data-import-export.component';
import { BroadcastChildComponent } from './broadcast-child/broadcast-child.component';
import { BroadcastParentComponent } from './broadcast-parent/broadcast-parent.component';
import { ForOfDataComponent } from './for-of-data/for-of-data.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { AttributesComponent } from './attributes/attributes.component';
import { ButtonClickComponent } from './button-click/button-click.component';
import { NgIfTemplateComponent } from './ng-if-template/ng-if-template.component';
import { InjectableComponent } from './injectable/injectable.component';
import { CastChildComponent } from './cast-child/cast-child.component';
import { CastParentComponent } from './cast-parent/cast-parent.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { ItemUrlComponent } from './item-url/item-url.component';
import { CurrencyComponent } from './currency/currency.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { FormComponent } from './form/form.component';
import { ForOfDataParentComponent } from './for-of-data-parent/for-of-data-parent.component';
import { ForOfDataChildComponent } from './for-of-data-child/for-of-data-child.component';
import { NameParentComponent } from './name-parent/name-parent.component';
import { NameChildComponent } from './name-child/name-child.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VoterParentComponent } from './voter-parent/voter-parent.component';
import { VoterChildComponent } from './voter-child/voter-child.component';
import { CountdownParentOneComponent } from './countdown-parent-one/countdown-parent-one.component';
import { CountdownChildOneComponent } from './countdown-child-one/countdown-child-one.component';
import { CountdownParentTwoComponent } from './countdown-parent-two/countdown-parent-two.component';
import { CountdownChildTwoComponent } from './countdown-child-two/countdown-child-two.component';
import { ServiceParentComponent } from './service-parent/service-parent.component';
import { ServiceChildComponent } from './service-child/service-child.component';
import { ZippyBasicComponent } from './zippy-basic/zippy-basic.component';
import { ZippyMultislotComponent } from './zippy-multislot/zippy-multislot.component';
import { DirectiveComponent } from './directive/directive.component';
import { DirectiveIdDirective } from './directive-id.directive';
import { ZippyTemplateComponent } from './zippy-template/zippy-template.component';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { NgProjectAsComponent } from './ng-project-as/ng-project-as.component';
import { CountdownChildThreeComponent } from './countdown-child-three/countdown-child-three.component';
import { CountdownParentThreeComponent } from './countdown-parent-three/countdown-parent-three.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { AdDirective } from "./ad.directive";
import { DynamicBannerComponent } from './dynamic-banner/dynamic-banner.component';
import { DynamicProfileComponent } from './dynamic-profile/dynamic-profile.component';
import { DynamicDirective } from './dynamic.directive';
import { InputGetComponent } from './input-get/input-get.component';
import { PopupService } from "./popup.service";
import { PopupComponent } from './popup/popup.component';
import { PopupParentComponent } from './popup-parent/popup-parent.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PopParentComponent } from './pop-parent/pop-parent.component';
import { PopComponent } from './pop/pop.component';
import { ButtonListenerDirective } from './button-listener.directive';


@NgModule({
  declarations: [
    AppComponent,
    DataImportExportComponent,
    BroadcastChildComponent,
    BroadcastParentComponent,
    ForOfDataComponent,
    InterpolationComponent,
    AttributesComponent,
    ButtonClickComponent,
    NgIfTemplateComponent,
    InjectableComponent,
    CastChildComponent,
    CastParentComponent,
    ItemPageComponent,
    ItemUrlComponent,
    CurrencyComponent,
    HttpClientComponent,
    FormComponent,
    ForOfDataParentComponent,
    ForOfDataChildComponent,
    NameParentComponent,
    NameChildComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterParentComponent,
    VoterChildComponent,
    CountdownParentOneComponent,
    CountdownChildOneComponent,
    CountdownParentTwoComponent,
    CountdownChildTwoComponent,
    ServiceParentComponent,
    ServiceChildComponent,
    ZippyBasicComponent,
    ZippyMultislotComponent,
    DirectiveComponent,
    DirectiveIdDirective,
    ZippyTemplateComponent,
    ZippyContentDirective,
    HostListenerComponent,
    NgProjectAsComponent,
    CountdownChildThreeComponent,
    CountdownParentThreeComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective,
    DynamicBannerComponent,
    DynamicProfileComponent,
    DynamicDirective,
    InputGetComponent,
    PopupComponent,
    PopupParentComponent,
    PopParentComponent,
    PopComponent,
    ButtonListenerDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],

  // https://www.youtube.com/watch?v=fALKYP8voBQ
  // https://learn.javascript.ru/screencast/angular#services-intro
  // https://www.youtube.com/watch?v=bJvBRJUytgg&list=PLDyvV36pndZF-vwsVB48ivZyNJ4ETBKNY
  // providers: [{provide: PopupService, useClass: PopupService}],
  providers: [PopupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
