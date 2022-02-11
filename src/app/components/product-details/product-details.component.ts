import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';
import { data } from '../../../data'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: any;

  buttonText: string = data.buttonTexts[2];
  newText: string = data.newText;
  quantity: number = 1;

  constructor(private shoppingCart: ShoppingCartService) { }

  buttonClicked() {
    const submitData = { 
      id: this.product.id, name: this.product.name, quantity: this. quantity
    }
    this.shoppingCart.setShoppingCart(submitData)
  }

  incrementer(): void {
    if (this.quantity >= 10) {
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
    console.log(this.shoppingCart)
  }

}
