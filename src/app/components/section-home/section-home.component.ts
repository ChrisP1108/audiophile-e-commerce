import { Component, OnInit } from '@angular/core';
import { data } from '../../../data';
import { newProductDataInterface } from './section-home.component.interfaces'

@Component({
  selector: 'app-section-home',
  templateUrl: './section-home.component.html',
  styleUrls: ['./section-home.component.scss']
})
export class SectionHomeComponent implements OnInit {

  constructor() { }

  newProduct: any = data.products.find(d => 
    d.id === data.newProduct.id);

  newProductData: newProductDataInterface = { 
    id: this.newProduct.id, 
    name: this.newProduct.name, 
    headline: data.newProduct.headline,
    buttonText: data.buttonTexts[0],
    buttonRoute: `/products/${this.newProduct.category}/${this.newProduct.slug}` 
  }

  ngOnInit(): void {
  }

}
