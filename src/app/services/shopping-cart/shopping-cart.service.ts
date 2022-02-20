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
      return { 
        id: product.id, 
        name: product.name,
        price: product.price,
        quantity: 0
      }
    });
  private subjectShoppingCartList = new Subject<Array<shoppingCartInterface>>();

  constructor() { }

  initShoppingCart(): void {
    this.subjectShoppingCartList.next(this.shoppingCart);
  }

  incrementShoppingItemQuantity(input: shoppingCartInterface): void {
    const index = this.shoppingCart.findIndex((item: { id: number; }) => 
      item.id === input.id);
    if (this.shoppingCart[index].quantity < 10) {
      this.shoppingCart[index].quantity += input.quantity;
    } else this.shoppingCart[index].quantity = 10;
    this.subjectShoppingCartList.next(this.shoppingCart);
  }

  decrementShoppingItemQuantity(input: shoppingCartInterface): void {
    const index = this.shoppingCart.findIndex((item: { id: number; }) => 
      item.id === input.id);
    if (this.shoppingCart[index].quantity > 0) {
      this.shoppingCart[index].quantity -= input.quantity;
    } else this.shoppingCart[index].quantity = 0;
    this.subjectShoppingCartList.next(this.shoppingCart);
  }

  zeroOutShoppingItemQuantity(input: number): void {
    const index = this.shoppingCart.findIndex((item: { id: number; }) => 
      item.id === input);
    this.shoppingCart[index].quantity = 0;
    this.subjectShoppingCartList.next(this.shoppingCart);
  }

  resetShoppingCart(): void {
    this.shoppingCart.forEach((item: shoppingCartInterface, index: number) => 
      this.shoppingCart[index].quantity = 0
    );
    this.subjectShoppingCartList.next(this.shoppingCart);
  }

  shoppingCartList(): Observable<shoppingCartInterface[]> {
    return this.subjectShoppingCartList.asObservable();
  }

}
