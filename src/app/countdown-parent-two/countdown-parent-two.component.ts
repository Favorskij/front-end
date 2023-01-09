import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {CountdownChildTwoComponent} from "../countdown-child-two/countdown-child-two.component";

@Component({
  selector: 'app-countdown-parent-two',
  templateUrl: './countdown-parent-two.component.html',
  styleUrls: ['./countdown-parent-two.component.css']
})
export class CountdownParentTwoComponent implements AfterViewInit{

  @ViewChild(CountdownChildTwoComponent)
  private timerComponent!: CountdownChildTwoComponent;


  seconds() {
    return 0;
  }

  ngAfterViewInit() {

    // Переопределите `seconds ()`, чтобы получить из `CountdownTimerComponent.seconds` ...
    // но сначала дождитесь галочки, чтобы избежать однократной ошибки нарушения
    // однонаправленного потока данных в devMode

    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() {
    this.timerComponent.start();
  }

  stop() {
    this.timerComponent.stop();
  }

}
