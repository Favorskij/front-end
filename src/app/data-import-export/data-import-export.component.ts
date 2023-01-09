import { Component } from '@angular/core';
import { data as it} from "./data";

@Component({
  selector: 'app-data-import-export',
  template: `

    data-import-export <br>
    1. Импорт, экспорт данных.<br><br>

    {{message}}

  `
})
export class DataImportExportComponent {

  message = it;

}
