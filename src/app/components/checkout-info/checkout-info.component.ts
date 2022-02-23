import { Component, OnInit } from '@angular/core';
import { data } from '../../../data';
import { checkoutFormsInterface } from './checkout-info.component.interfaces';

@Component({
  selector: 'app-checkout-info',
  templateUrl: './checkout-info.component.html',
  styleUrls: ['./checkout-info.component.scss']
})
export class CheckoutInfoComponent implements OnInit {


  formValues : any = { };
  headingText: string = data.cartModal.text[9];
  checkoutForms: checkoutFormsInterface[] = data.checkoutForms

  constructor() { }

  radioSelect(key: string, input: string): void {
    this.formValues[key] = input;
  }

  ngOnInit(): void {
    this.checkoutForms.forEach(section => {
      section.fields.forEach(field => {
        this.formValues[field.name] = field.value
      });
    });
    console.log(this.formValues);
  }

}
