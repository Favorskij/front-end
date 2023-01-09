import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {CountdownChildThreeComponent} from "../countdown-child-three/countdown-child-three.component";


@Component({
  selector: 'app-countdown-parent-three',
  templateUrl: './countdown-parent-three.component.html',
})
export class CountdownParentThreeComponent implements AfterViewInit {

  // https://www.youtube.com/watch?v=O47uUnJjbJc&t=4s
  // Данная ссылка показывает различные способы устранения данной ошибки

  // На мой взгляд, не очен хороший способ.

  // !!! Читать внимательно

  // Если пользоваться вот таким способом: то, выдаст ошибка\предупреждение,
  // что свойство было изменено после создание DOM.

  /*  core.mjs:6469 ERROR Error: NG0100: ExpressionChangedAfterItHasBeenCheckedError:
    Expression has changed after it was checked. Previous value: 'Иван'. Current value:
    'Игорь'.. Find more at https://angular.io/errors/NG0100  */

  /*myName = 'Иван'

  @ViewChild(CountdownChildThreeComponent)
  private timerComponent!: CountdownChildThreeComponent;

  ngAfterViewInit() {
    this.myName = this.timerComponent.childName
  }*/

  // Было Иван, стало Игорь.
  // Angular с начало проверил родительский компонент, затем дочерний, и уже потом построил дом.
  // Но так как во время проверки у нас было значение Иван, а после построения DOM стало Игорь, Angular выдаёт
  // ошибку\предупреждение

  // Данное предупреждение возникает только во время разработки, но в любом случаи это не есть хорошо.
  // Для того что бы избежать такую ошибку, можно использовать следующий пример:


  myName = 'Пётр'

  nameMy() {
    return 'Максим'
  }

  @ViewChild(CountdownChildThreeComponent)
  private timerComponent!: CountdownChildThreeComponent;

  ngAfterViewInit() {

    // Асинхронно обновляем данные при помощи setTimeout()
    setTimeout(() => this.nameMy = () => this.timerComponent.childName, 0);
    setTimeout(() => this.myName = this.timerComponent.childName, 0);
  }


    // Или


  /*myName = 'Пётр'

  // Добавляем в конструктор детектор изменений
  constructor(private cd: ChangeDetectorRef) {}

  @ViewChild(CountdownChildThreeComponent)
  private timerComponent!: CountdownChildThreeComponent;

  ngAfterViewInit() {

    // Изменили данные
    this.myName = this.timerComponent.childName

    // Заново проверили изменения
    this.cd.detectChanges()

  }*/





}
