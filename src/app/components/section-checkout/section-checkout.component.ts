import { Component, OnInit } from '@angular/core';
import { MenuToggleService } from '../../services/menu-toggle/menu-toggle.service';

@Component({
  selector: 'app-section-checkout',
  templateUrl: './section-checkout.component.html',
  styleUrls: ['./section-checkout.component.scss']
})
export class SectionCheckoutComponent implements OnInit {

  checkoutToggled: boolean = false;

  constructor(private checkoutToggle: MenuToggleService) {
    this.checkoutToggle.checkoutToggled().subscribe((value: boolean) => {
      this.checkoutToggled = value;
    })
  }

  form: Object = { }

  formData(input: any) {
    this.form = input;
  }

  submitForm(): void {
    this.checkoutToggle.setCheckoutToggle(true);
  }

  ngOnInit(): void {
  }

}
