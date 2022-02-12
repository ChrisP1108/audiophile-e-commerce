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
  private subjectShoppingCartList = new Subject<Array<shoppingCartInterface>>();

  constructor() { }

  setShoppingItemQuantity(input: shoppingCartInterface): void {
    const index = this.shoppingCart.findIndex((item: { id: number; }) => 
      item.id === input.id);
    if (this.shoppingCart[index].quantity < 10) {
      this.shoppingCart[index].quantity += input.quantity;
    } else this.shoppingCart[index].quantity = 10;
    this.subjectShoppingCartList.next(this.shoppingCart);
  }

  shoppingCartList(): Observable<shoppingCartInterface[]> {
    return this.subjectShoppingCartList.asObservable();
  }

}
