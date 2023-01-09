import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `

    interpolation <br>
    2. Интерполяция <br>

    <p>{{ message }}</p>
    <p>{{ seyHello() }}</p>

  `,
})
export class InterpolationComponent {

  message:string = 'Привет мир!'

  seyHello () {
    return 'Привет мир ещё раз!'
  }

}
