import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';
import { shoppingCartInterface } from '../../services/shopping-cart/shopping-cart-service.interface'
import { productInterface } from '../../app-interfaces';
import { data } from '../../../assets/data/data';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product!: productInterface;

  buttonText: string = data.buttonTexts[2];
  newText: string = data.newText;
  quantityMaxedMessage: string[] = data.quantityMaxedMessages
  quantity: number = 1;
  total: number = 0;
  features: string[] = [];
  featureHeadline: string[] = data.productHeadlines;
  
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
    this.shoppingCart.incrementShoppingItemQuantity(submitData);
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
    this.shoppingCart.initShoppingCart();
    if (this.product.features.indexOf('\n') !== -1) {
      const newLinePoint = this.product.features.indexOf('\n');
      const partOne = this.product.features.slice(0, newLinePoint);
      const partTwo = this.product.features.slice(newLinePoint);
      this.features = [partOne, partTwo]
    } else {
      this.features = [...this.product.features]
    }
  }

}
