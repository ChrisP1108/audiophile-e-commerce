import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { shoppingCartInterface } from './shopping-cart-service.interface'
import { data } from '../../../data'

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private shoppingCart: any = 
    data.products.map(product => {
      return { id: product.id, name: product.name, quantity: 0}
    });
  private subjectShoppingCart = new Subject<Array<Object>>();

  constructor() { }

  setShoppingCart(input: shoppingCartInterface): void {
    this.shoppingCart = this.shoppingCart.map((item: { id: number; }) => 
      item.id === input.id ? input : item);
    this.subjectShoppingCart.next(this.shoppingCart)
  }

  shoppingCartList(): any {
    return this.subjectShoppingCart.asObservable();
  }

}
