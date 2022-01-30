import { Component, OnInit } from '@angular/core';
import { data } from '../../../data';
import { shoppingItemsInterface } from './shopping-item-list.component.interfaces';

@Component({
  selector: 'app-shopping-item-list',
  templateUrl: './shopping-item-list.component.html',
  styleUrls: ['./shopping-item-list.component.scss']
})
export class ShoppingItemListComponent implements OnInit {

  constructor() { }

  shoppingItems: any = Object.values(data.shoppingItems).map((s, i) => {
    const input = data.products.find(p => p.id === s && p.category === Object.keys(data.shoppingItems)[i]);
    return { id: input?.id, category: input?.category, 
      images: `./assets/shared/desktop/image-category-thumbnail-${input?.category}.png`}
  });

  ngOnInit(): void { }

}
