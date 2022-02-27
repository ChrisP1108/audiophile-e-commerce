import { Component, OnInit } from '@angular/core';
import { MenuToggleService } from '../../services/menu-toggle/menu-toggle.service';
import { data } from '../../../assets/data/data';

@Component({
  selector: 'app-section-checkout',
  templateUrl: './section-checkout.component.html',
  styleUrls: ['./section-checkout.component.scss']
})
export class SectionCheckoutComponent implements OnInit {

  checkoutToggled: boolean = false;
  loading: boolean = false;
  errCheck: boolean = false;
  errList: string[] = [];
  formList: any = [];
  formFields: any = { };

  constructor(private checkoutToggle: MenuToggleService) {
    this.checkoutToggle.checkoutToggled().subscribe((value: boolean) => {
      this.checkoutToggled = value;
    })
  }

  formData(input: any): void {
    const inputKeys: string[] = Object.keys(input);
    const inputValues: string[] = Object.values(input);
    const displayNames: string[] = []
    data.checkoutForms.forEach(section => {
      section.fields.forEach(field => {
        if (field.type !== 'radio') {
          displayNames.push(field.display)
        }
      })
    })
    inputKeys.forEach((key, index) => {
      if (displayNames.includes(inputValues[index])) {
        input[key] = "";
      }
    })
    this.formFields = input;
    this.formList.forEach((field: any) => {
      switch(field.type) {
        case 'text':
          if (this.formFields[field.field].length < 1) {
            if (!this.errList.includes(field.field)) {
              this.errList.push(field.field);
            }
          } else {
            this.errList = this.errList.filter(f => f !== field.field);
          } 
          break;
        case 'number':
          this.formFields[field.field] = Number(this.formFields[field.field]);
          if (this.formFields[field.field] === 0) {
            if (!this.errList.includes(field.field)) {
              this.errList.push(field.field);
            }
          } else {
            this.errList = this.errList.filter(f => f !== field.field);
          } 
          break;
        case 'email':
          if (!this.formFields[field.field].includes("@")) {
            if (!this.errList.includes(field.field)) {
              this.errList.push(field.field);
            }
          } else {
            this.errList = this.errList.filter(f => f !== field.field);
          } 
          break;
        case 'tel':
          if (this.formFields[field.field].length < 10) {
            if (!this.errList.includes(field.field)) {
              this.errList.push(field.field);
            }
          } else {
            this.errList = this.errList.filter(f => f !== field.field);
          } 
          break;
        case 'radio':
          if (this.formFields[field.field] === "") {
            if (!this.errList.includes(field.field)) {
              this.errList.push(field.field);
            }
          } else {
            this.errList = this.errList.filter(f => f !== field.field);
          } 
          break;
        default:
          break;
      }
    });
  }

  formErrCheck(): boolean {
    if (this.errList.length === 0) {
      return true
    } else return false
  }

  submitForm(): void {
    this.errCheck = true;
    if (this.formErrCheck()) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.errCheck = false;
        this.checkoutToggle.setCheckoutToggle(true);
      }, 2000);
    }
  }

  ngOnInit(): void {
    data.checkoutForms.forEach(section => {
      section.fields.forEach(field => {
        this.formList.push( { field: field.name, type: field.type} );
      })
    });
  }

}
