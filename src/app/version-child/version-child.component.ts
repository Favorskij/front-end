import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-version-child',
  templateUrl: './version-child.component.html',
})
export class VersionChildComponent implements OnChanges {

  // Входные параметры
  @Input()
  major = 0;

  @Input()
  minor = 0;

  changeLog: string[] = [];

  // SimpleChanges слушатель входных параметров. Слушает, изменились ли входные параметры или нет.
  ngOnChanges(changes: SimpleChanges) {

    // console.log('aaaaaaaaaa', changes) // {major: SimpleChange, minor: SimpleChange}

    const log: string[] = [];

    for (const propName in changes) {

      const changedProp = changes[propName]; // SimpleChange {previousValue: 2, currentValue: 3, firstChange: false}
      console.log(changedProp.currentValue) // number: 1
                                            // number: 23

      // Конвертируем объект в строку
      const to = JSON.stringify(changedProp.currentValue); // number: 1
                                                           // number: 23

      console.log(to) // string: 1
                      // string: 23

      // Проверьте, является ли новое значение первым присвоенным значением.
      // То есть, узнаём, значение меняется первый или не первый раз.
      // Если значение меняется первый раз, то .isFirstChange() вернёт true
      if (changedProp.isFirstChange()) {

        log.push(`Начальное значение ${propName} установлено на ${to}`);

      } else {

        // .previousValue предыдущее значение
        // Преобразовываем number to string
        const from = JSON.stringify(changedProp.previousValue);

        log.push(`${propName} изменён с ${from} на ${to}`);

      }
    }

    this.changeLog.push(log.join(', '));

  }

}
