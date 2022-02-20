import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';
import { shoppingCartInterface } from '../../services/shopping-cart/shopping-cart-service.interface';
import { data } from '../../../data'

@Component({
  selector: 'app-cart-modal-list',
  templateUrl: './cart-modal-list.component.html',
  styleUrls: ['./cart-modal-list.component.scss']
})

export class CartModalListComponent implements OnInit {

  cartModalList: shoppingCartInterface[] = [];
  cartEmpty: boolean = true;
  cartTotal: number = 0;

  cartModalText: string[] = data.cartModal;

  constructor(private shoppingCart: ShoppingCartService) { 
    this.shoppingCart.shoppingCartList()
      .subscribe((value: shoppingCartInterface[]) => {
        this.cartModalList = value.filter(item => item.quantity > 0);
        this.cartEmpty = !this.cartModalList.length ? true : false;
        this.cartTotal = this.cartModalList.reduce((a: any, b: any) => {
          if (!a) {
            a = 0;
          }
          return a + (b.price * b.quantity);
        }, 0);
    })
  }

  clearList(): void {
    this.shoppingCart.resetShoppingCart();
  }

  ngOnInit(): void {
    this.shoppingCart.initShoppingCart();
  }

}
