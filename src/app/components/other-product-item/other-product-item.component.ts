import { Component, OnInit, Input } from '@angular/core';
import { othersInterface } from '../section-products/section-products.component-interfaces';

@Component({
  selector: 'app-other-product-item',
  templateUrl: './other-product-item.component.html',
  styleUrls: ['./other-product-item.component.scss']
})
export class OtherProductItemComponent implements OnInit {

  @Input() item!: othersInterface


  constructor() { }

  ngOnInit(): void {
    console.log(this.item);
  }

}
