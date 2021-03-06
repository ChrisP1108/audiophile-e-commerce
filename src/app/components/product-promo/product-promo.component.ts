import { Component, OnInit, Input } from '@angular/core';
import { data } from '../../../assets/data/data';

@Component({
  selector: 'app-product-promo',
  templateUrl: './product-promo.component.html',
  styleUrls: ['./product-promo.component.scss']
})
export class ProductPromoComponent implements OnInit {

  @Input() product: any;
  @Input() index: any;

  buttonText: string = data.buttonTexts[0];
  newText: string = data.newText;

  constructor() { }

  ngOnInit(): void { }

}
