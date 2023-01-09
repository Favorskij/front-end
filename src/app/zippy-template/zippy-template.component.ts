import { Component, ContentChild } from '@angular/core';
import { ZippyContentDirective } from "../app.component";


@Component({
  selector: 'app-zippy-template',
  templateUrl: './zippy-template.component.html',
})
export class ZippyTemplateComponent {

  contentId = 3;
  expanded:boolean = true;


  // Подключаем директиву к компоненту
  @ContentChild(ZippyContentDirective)
  content!: ZippyContentDirective;


}
