import { Component, OnInit } from '@angular/core';
import { data } from '../../../data';
import { checkoutFormsInterface } from './checkout-info.component.interfaces';

@Component({
  selector: 'app-checkout-info',
  templateUrl: './checkout-info.component.html',
  styleUrls: ['./checkout-info.component.scss']
})
export class CheckoutInfoComponent implements OnInit {

  headingText: string = data.cartModal.text[9];
  checkoutForms: checkoutFormsInterface[] = data.checkoutForms

  constructor() { }

  ngOnInit(): void {
  }

}
