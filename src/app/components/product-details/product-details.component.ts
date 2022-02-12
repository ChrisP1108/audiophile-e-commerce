import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';
import { shoppingCartInterface } from '../../services/shopping-cart/shopping-cart-service.interface'
import { productInterface } from '../../app-interfaces';
import { data } from '../../../data';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product!: productInterface;

  buttonText: string = data.buttonTexts[2];
  newText: string = data.newText;
  quantityMaxedMessage: string = data.quantityMaxedMessage
  quantity: number = 1;
  total: number = 0;
  
  constructor(private shoppingCart: ShoppingCartService) {
    this.shoppingCart.shoppingCartList()
      .subscribe((value: Array<shoppingCartInterface>) => {
        const shoppingCartItem: any = value.find((item: shoppingCartInterface) => item.id === this.product.id);
        this.total = shoppingCartItem.quantity;
    });
  }

  submitTally(): void {
    if (this.total > 10) {
      return;
    }
    const submitData = { 
      id: this.product.id, 
      name: this.product.name, 
      quantity: this.quantity
    }
    this.shoppingCart.setShoppingItemQuantity(submitData);
    this.quantity = 1;
  }

  incrementer(): void {
    if ((this.quantity + this.total) >= 10) {
      return
    }
    this.quantity++;
  }

  decrementer(): void {
    if (this.quantity <= 1) {
      return
    }
    this.quantity--;
  }

  ngOnInit(): void {
    const initData = { 
      id: this.product.id, 
      name: this.product.name, 
      quantity: 0
    } 
    this.shoppingCart.setShoppingItemQuantity(initData);
  }

}
