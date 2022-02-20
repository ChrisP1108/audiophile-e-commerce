import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';
import { shoppingCartInterface } from '../../services/shopping-cart/shopping-cart-service.interface';
import { productInterface } from '../../app-interfaces';
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

  product: any = { };

  constructor(private shoppingCart: ShoppingCartService) { }

  incrementer(): void {
    if (this.quantityChange.quantity >= 10) {
      return
    }
    this.quantityChange.quantity = this.quantityChange.quantity += 1;
    this.shoppingCart.incrementShoppingItemQuantity(this.quantityChange);
    console.log(this.quantityChange)
  }

  decrementer(): void {
    if (this.quantityChange.quantity <= 1) {
      return
    }
    this.quantityChange.quantity = this.quantityChange.quantity -= 1;
    this.shoppingCart.decrementShoppingItemQuantity(this.quantityChange);
    console.log(this.quantityChange)
  }

  ngOnInit(): void {
    this.quantityChange = {
      id: this.item.id,
      name: this.item.name,
      quantity: this.item.quantity
    }
    console.log(this.item);
    this.product = data.products.find((product: any) => product.id === this.item.id);
    console.log(this.product);
  }

}
