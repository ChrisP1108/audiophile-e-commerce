import { Component, OnInit } from '@angular/core';
import { data } from '../../../data';
import { newProductInterface, newProductDataInterface,
  promotionsInterface } from './section-home.component.interfaces';

@Component({
  selector: 'app-section-home',
  templateUrl: './section-home.component.html',
  styleUrls: ['./section-home.component.scss']
})
export class SectionHomeComponent implements OnInit {

  constructor() { }

  productFind: any = data.products.find((d: any) => 
    d.id === data.newProduct.id)

  newProduct: newProductInterface = {
    id: this.productFind.id,
    name: this.productFind.name,
    slug: this.productFind.slug,
    category: this.productFind.category,
    topText: data.newProduct.topText
  };

  newProductData: newProductDataInterface = { 
    id: this.newProduct.id, 
    name: this.newProduct.name,
    topText: this.newProduct.topText, 
    headline: data.newProduct.headline,
    buttonText: data.buttonTexts[0],
    buttonRoute: `/products/${this.newProduct.category}/${this.newProduct.slug}` 
  }

  promotions: any = data.promotions;

  promotionProducts: any = data.promotions.map((i: any) => {
    return data.products.find(d => d.id === i.id)
  });

  promotionsData: promotionsInterface = this.promotionProducts.map((p: any, i: number) => {
      return {
        id: this.promotions[i].id,
        name: p.name,
        url: `/products/${p.category}/${p.slug}`,
        shortName: p.shortName,
        category: p.category,
        image: this.promotions[i].image,
        headline: this.promotions[i].headline
      }
  });

  ngOnInit(): void { 
    window.scrollTo(0,0);
  }

}
