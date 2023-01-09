import { Component } from '@angular/core';
import { LoggerService } from "../logger.service";


@Component({
  selector: 'app-injectable',
  templateUrl: './injectable.component.html',
})
export class InjectableComponent {

  count = 0;

  constructor(private logger: LoggerService) { }

  onLogMe() {
    this.logger.writeCount(this.count);
    this.count++;
  }

}
