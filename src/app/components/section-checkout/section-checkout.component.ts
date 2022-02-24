import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-checkout',
  templateUrl: './section-checkout.component.html',
  styleUrls: ['./section-checkout.component.scss']
})
export class SectionCheckoutComponent implements OnInit {

  constructor() { }

  form: Object = { }

  formData(input: any) {
    this.form = input;
  }

  submitForm(): void {
    console.log('Submit Clicked');
  }

  ngOnInit(): void {
  }

}
