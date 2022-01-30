import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { data } from '../../../data';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  @Input() newProductData: any;
  buttonText: string = data.buttonTexts[0];

  constructor(private router: Router) { }

  ngOnInit(): void { }
  
}
