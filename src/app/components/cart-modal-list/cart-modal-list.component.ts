import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';
import { shoppingCartInterface } from '../../services/shopping-cart/shopping-cart-service.interface';
import { MenuToggleService } from '../../services/menu-toggle/menu-toggle.service';
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
  buttonText: string = data.buttonTexts[3];

  cartModalText: string[] = data.cartModal.text;

  constructor(private shoppingCart: ShoppingCartService,
    private menuToggle: MenuToggleService) { 
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

  unToggleModal(): void {
    this.menuToggle.setCartToggle(false);
  }

  ngOnInit(): void {
    this.shoppingCart.initShoppingCart();
  }

}
