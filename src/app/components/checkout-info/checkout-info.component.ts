import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { data } from '../../../data';
import { checkoutFormsInterface } from './checkout-info.component.interfaces';

@Component({
  selector: 'app-checkout-info',
  templateUrl: './checkout-info.component.html',
  styleUrls: ['./checkout-info.component.scss']
})
export class CheckoutInfoComponent implements OnInit {

  @Output() formData = new EventEmitter<Object>();
  @Input() errCheck!: boolean;
  @Input() errList!: string[];

  formValues : any = { };
  headingText: string = data.cartModal.text[9];
  radioField: string = "";
  checkoutForms: checkoutFormsInterface[] = data.checkoutForms

  constructor() { }

  radioSelect(key: string, input: string): void {
    this.formValues[key] = input;
    this.formData.emit(this.formValues);
  }

  fieldValue(input: string, display: string, type: string): any {
    let value = this.formValues[input];
    value = value === display ? '' : value;
    if (type === 'number') {
      value = Number(value);
      value = value === 0 ? null : value
    }
  }

  textChange(input: any, field: string, type: string, display: string): void {
    let value = input.target.value;
    value = value === display ? '' : value;
    if (type === 'number') {
      value = Number(value);
      value = value === 0 ? null : value;
    }
    console.log(value);
    this.formValues[field] = value;
    this.formData.emit(this.formValues);
  }

  errTrue(input: string): boolean {
    if (this.errList.includes(input)) {
      return true
    } else return false
  }

  ngOnInit(): void {
    this.checkoutForms.forEach(section => {
      section.fields.forEach(field => {
        switch(field.type) {
          case 'number':
            this.formValues[field.name] = 0;
            break;
          case 'boolean':
            this.formValues[field.name] = false;
            break;
          default:
            this.formValues[field.name] = "";
            break;
        };
        if (field.type === 'radio') {
          this.radioField = field.name
        }
      });
    });
    this.formData.emit(this.formValues);
    console.log(this.radioField);
  }

}
