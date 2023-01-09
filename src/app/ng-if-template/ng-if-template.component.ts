import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-template',
  templateUrl: './ng-if-template.component.html',
})
export class NgIfTemplateComponent {

  canEdit = false;

  onEditClick() {
    this.canEdit = !this.canEdit;
  }

  price:number = 5

}
