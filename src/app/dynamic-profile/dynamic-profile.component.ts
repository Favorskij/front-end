import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-profile',
  templateUrl: './dynamic-profile.component.html',
  styleUrls: ['./dynamic-profile.component.css']
})
export class DynamicProfileComponent {

  @Input()
  data: any;

  @Input()
  myString1:any;

  @Input()
  myString2:any;

}
