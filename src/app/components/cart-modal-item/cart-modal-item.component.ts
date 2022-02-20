import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';
import { shoppingCartInterface } from '../../services/shopping-cart/shopping-cart-service.interface';
import { data } from '../../../data';

@Component({
  selector: 'app-cart-modal-item',
  templateUrl: './cart-modal-item.component.html',
  styleUrls: ['./cart-modal-item.component.scss']
})
export class CartModalItemComponent implements OnInit {

  @Input() item!: shoppingCartInterface;

  quantityChange: shoppingCartInterface = {
    id: 0,
    name: '',
    quantity: 0
  };

  cartModalName: any = { }

  totalQuantity: number = 0;

  product: any = { };

  constructor(private shoppingCart: ShoppingCartService) { }

  incrementer(): void {
    if (this.totalQuantity >= 10) {
      return
    }
    this.quantityChange.quantity = 1;
    this.totalQuantity += 1;
    this.shoppingCart.incrementShoppingItemQuantity(this.quantityChange);
  }

  decrementer(): void {
    if (this.totalQuantity === 1) {
      return
    } 
    this.quantityChange.quantity = 1;
    this.totalQuantity -= 1;
    this.shoppingCart.decrementShoppingItemQuantity(this.quantityChange);
  }

  removeItem(): void {
    this.shoppingCart.zeroOutShoppingItemQuantity(this.item.id)
  }

  ngOnInit(): void {
    this.quantityChange = {
      id: this.item.id,
      name: this.item.name,
      quantity: 0
    }
    this.totalQuantity = this.item.quantity;
    this.product = data.products.find((product: any): any => product.id === this.item.id);
    this.cartModalName = data.cartModal.products.find(name => 
      name.id === this.item.id
    );
  }

}
