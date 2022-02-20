import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart/shopping-cart.service';
import { shoppingCartInterface } from '../../services/shopping-cart/shopping-cart-service.interface';

@Component({
  selector: 'app-cart-modal-list',
  templateUrl: './cart-modal-list.component.html',
  styleUrls: ['./cart-modal-list.component.scss']
})

export class CartModalListComponent implements OnInit {

  shoppingCartList: any = [];

  constructor(private shoppingCart: ShoppingCartService) { 
    this.shoppingCart.shoppingCartList()
      .subscribe((value: Array<shoppingCartInterface>) => {
        this.shoppingCartList = value;
    })
  }

  ngOnInit(): void {
    const initData = { 
      id: 1, 
      name: '', 
      quantity: 0
    } 
    this.shoppingCart.setShoppingItemQuantity(initData);
    console.log(this.shoppingCartList);
  }

}
