import { Component, OnInit } from '@angular/core';
import { shoppingCartInterface } from '../../services/shopping-cart/shopping-cart-service.interface';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';
import { MenuToggleService } from '../../services/menu-toggle/menu-toggle.service';
import { data } from '../../../assets/data/data';

@Component({
  selector: 'app-checkout-modal',
  templateUrl: './checkout-modal.component.html',
  styleUrls: ['./checkout-modal.component.scss']
})
export class CheckoutModalComponent implements OnInit {

  image: string = data.checkoutModal.image
  text: string[] = data.checkoutModal.text;
  additional: string[] = data.checkoutModal.additional;

  cartList: shoppingCartInterface[] = [];
  grandTotal: number = 0;
  cartModalName: any = { }
  product: any = { };
  cartItem: any = { };
  grandTotalText: string = data.cartModal.text[8];
  buttonText: string = data.checkoutModal.button;

  constructor(private modalToggle: MenuToggleService, 
    private shoppingCart: ShoppingCartService) {
    this.shoppingCart.shoppingCartList()
      .subscribe((value: shoppingCartInterface[]) => {
        this.cartList = value.filter(item => 
          item.quantity > 0)
        ;
      }
    );
    this.shoppingCart.getGrandTotal()
      .subscribe((value: any) => {
        this.grandTotal = value;
      }
    );
  }

  untoggleModal(): void {
    this.shoppingCart.resetShoppingCart();
    this.modalToggle.setCheckoutToggle(false);
  }

  ngOnInit(): void {
    this.shoppingCart.initShoppingCart();
    this.product = data.products.find((product: any): any => 
      product.id === this.cartList[0].id
    );
    this.cartModalName = data.cartModal.products.find(name => 
      name.id === this.product.id
    );
    this.cartItem = this.cartList.find(item => item.id === this.product.id);
    console.log(this.cartItem);
  }

}
