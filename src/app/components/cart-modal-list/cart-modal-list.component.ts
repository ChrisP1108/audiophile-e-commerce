import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';
import { shoppingCartInterface } from '../../services/shopping-cart/shopping-cart-service.interface';
import { MenuToggleService } from '../../services/menu-toggle/menu-toggle.service';
import { Router } from '@angular/router';
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
  buttonTextCheckout: string = data.buttonTexts[3];
  buttonTextContinue: string = data.buttonTexts[4];
  cartModalText: string[] = data.cartModal.text;
  shipping: any = data.cartModal.costs[0].price;
  grandTotal: number = 0;
  vat: any = data.cartModal.costs[1].percentage;
  checkout: boolean = false;

  constructor(private shoppingCart: ShoppingCartService,
    private menuToggle: MenuToggleService, private router: Router) { 
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
        // if (this.cartEmpty && this.router.url === '/checkout') {
        //   window.history.back();
        // }
    })
  }

  clearList(): void {
    this.shoppingCart.resetShoppingCart();
  }

  unToggleModal(): void {
    this.menuToggle.setCartToggle(false);
  }

  submitPayment(): void {
    console.log('Submitted');
  }

  ngOnInit(): void {
    this.shoppingCart.initShoppingCart();
    this.checkout = this.router.url.includes('checkout') ? true : false;
    this.vat = Math.ceil(this.cartTotal * this.vat);
    this.grandTotal = this.shipping + this.cartTotal;
  }

}
