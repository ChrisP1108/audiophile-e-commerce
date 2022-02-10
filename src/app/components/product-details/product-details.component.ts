import { Component, OnInit, Input } from '@angular/core';
import { data } from '../../../data'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: any;

  buttonText: string = data.buttonTexts[2];
  newText: string = data.newText;

  constructor() { }

  ngOnInit(): void {
    console.log(this.product)
  }

}
