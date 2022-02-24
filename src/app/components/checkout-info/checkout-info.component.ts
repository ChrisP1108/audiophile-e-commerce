import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { data } from '../../../data';
import { checkoutFormsInterface } from './checkout-info.component.interfaces';

@Component({
  selector: 'app-checkout-info',
  templateUrl: './checkout-info.component.html',
  styleUrls: ['./checkout-info.component.scss']
})
export class CheckoutInfoComponent implements OnInit {

  @Output() formData = new EventEmitter<Object>();

  formValues : any = { };
  headingText: string = data.cartModal.text[9];
  checkoutForms: checkoutFormsInterface[] = data.checkoutForms

  constructor() { }

  radioSelect(key: string, input: string): void {
    this.formValues[key] = input;
    this.formData.emit(this.formValues);
  }

  fieldValue(input:string, name: string): string {
    let value = this.formValues[input];
    value = value === name ? '' : value;
    return value;
  }

  textChange(input: any, field: string): void {
    this.formValues[field] = input.target.value;
    this.formData.emit(this.formValues);
  }

  ngOnInit(): void {
    this.checkoutForms.forEach(section => {
      section.fields.forEach(field => {
        switch(field.type) {
          case 'number':
            this.formValues[field.name] = 0;
            break;
          case 'text':
            this.formValues[field.name] = "";
            break;
          case 'boolean':
            this.formValues[field.name] = false;
            break;
        };
      });
    });
    this.formData.emit(this.formValues);
  }

}
