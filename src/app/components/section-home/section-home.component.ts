import { Component, OnInit } from '@angular/core';
import { data } from '../../../data';
import { newProductInterface, newProductDataInterface } from './section-home.component.interfaces';

@Component({
  selector: 'app-section-home',
  templateUrl: './section-home.component.html',
  styleUrls: ['./section-home.component.scss']
})
export class SectionHomeComponent implements OnInit {

  constructor() { }

  productFind: any = data.products.find(d => 
    d.id === data.newProduct.id)

  newProduct: newProductInterface = {
    id: this.productFind.id,
    name: this.productFind.name,
    category: this.productFind.category,
    slug: this.productFind.slug
  };

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
