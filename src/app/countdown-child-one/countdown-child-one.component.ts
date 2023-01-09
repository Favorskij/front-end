import {Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-countdown-child-one',
  templateUrl: './countdown-child-one.component.html',
})
export class CountdownChildOneComponent implements OnDestroy {

  intervalId = 0;
  message = '';
  seconds = 11;

  constructor() { }


  ngOnDestroy() {
    this.clearTimer();
  }

  start() { this.countDown(); }
  stop()  {
    this.clearTimer();
    this.message = `Удержание на T-${this.seconds} секунд`;
  }

  private clearTimer() { clearInterval(this.intervalId); }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) { this.seconds = 10; } // reset
        this.message = `T-${this.seconds} секунда и подсчет`;
      }
    }, 1000);
  }

}
