import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { shoppingCartInterface } from './shopping-cart-service.interface'
import { data } from '../../../data'

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingListStorage(): any {
    const storage: any = localStorage.getItem("audiophileShoppingCart");
    if (JSON.parse(storage)) {
      return JSON.parse(storage);
    } else {
        data.products.map(product => {
          return { 
            id: product.id, 
            name: product.name,
            price: product.price,
            quantity: 0
          }
        }
      )
    }
  }
  
  private shoppingCart: any = this.shoppingListStorage();
  private cartTotal: number = 0;
  shipping: any = data.cartModal.costs[0].price;
  private grandTotal: number = 0;
  private subjectShoppingCartList = new Subject<Array<shoppingCartInterface>>();
  private subjectCartTotal = new Subject<Number>();
  private subjectGrandTotal = new Subject<Number>();

  constructor() { }

  updater(): void {
    this.cartTotal = this.shoppingCart.reduce((a: any, b: any) => {
      if (!a) {
        a = 0;
      }
      return a + (b.price * b.quantity);
    }, 0);
    this.grandTotal = this.cartTotal + this.shipping;
    this.subjectCartTotal.next(this.cartTotal);
    this.subjectGrandTotal.next(this.grandTotal);
    localStorage.setItem("audiophileShoppingCart", JSON.stringify(this.shoppingCart));
  }

  initShoppingCart(): void {
    this.updater();
    this.subjectShoppingCartList.next(this.shoppingCart);
  }

  incrementShoppingItemQuantity(input: shoppingCartInterface): void {
    const index = this.shoppingCart.findIndex((item: { id: number; }) => 
      item.id === input.id);
    if (this.shoppingCart[index].quantity < 10) {
      this.shoppingCart[index].quantity += input.quantity;
    } else this.shoppingCart[index].quantity = 10;
    this.updater();
    this.subjectShoppingCartList.next(this.shoppingCart);
  }

  decrementShoppingItemQuantity(input: shoppingCartInterface): void {
    const index = this.shoppingCart.findIndex((item: { id: number; }) => 
      item.id === input.id);
    if (this.shoppingCart[index].quantity > 0) {
      this.shoppingCart[index].quantity -= input.quantity;
    } else this.shoppingCart[index].quantity = 0;
    this.updater();
    this.subjectShoppingCartList.next(this.shoppingCart);
  }

  zeroOutShoppingItemQuantity(input: number): void {
    const index = this.shoppingCart.findIndex((item: { id: number; }) => 
      item.id === input);
    this.shoppingCart[index].quantity = 0;
    this.updater();
    this.subjectShoppingCartList.next(this.shoppingCart);
  }

  resetShoppingCart(): void {
    this.shoppingCart.forEach((item: shoppingCartInterface, index: number) => 
      this.shoppingCart[index].quantity = 0
    );
    this.updater();
    this.subjectShoppingCartList.next(this.shoppingCart);
  }

  shoppingCartList(): Observable<shoppingCartInterface[]> {
    return this.subjectShoppingCartList.asObservable();
  }

  getCartTotal(): Observable<Number> {
    return this.subjectCartTotal.asObservable();
  }

  getGrandTotal(): Observable<Number> {
    return this.subjectGrandTotal.asObservable();
  }

}
