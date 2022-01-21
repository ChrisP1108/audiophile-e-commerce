import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  @Input() newProduct: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.newProduct)
  }

}
