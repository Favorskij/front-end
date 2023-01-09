import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[directiveDynamic]'
})
export class DynamicDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
