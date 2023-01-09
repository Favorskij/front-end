import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {

  name = ''
  address = ''


  constructor(private formBuilder: FormBuilder) { }

  // Группа формы
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
    });


  onSubmit(): void {

    this.name = <string>this.checkoutForm.value.name
    this.address = <string>this.checkoutForm.value.address

    // reset() очищает форму
    this.checkoutForm.reset();
  }

}
