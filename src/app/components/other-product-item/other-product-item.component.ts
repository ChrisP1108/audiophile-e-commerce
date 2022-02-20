import { Component, OnInit, Input } from '@angular/core';
import { othersInterface } from '../section-products/section-products.component-interfaces';
import { RouteConfigLoadStart, Router } from '@angular/router';
import { data } from '../../../data';

@Component({
  selector: 'app-other-product-item',
  templateUrl: './other-product-item.component.html',
  styleUrls: ['./other-product-item.component.scss']
})
export class OtherProductItemComponent implements OnInit {

  @Input() item!: othersInterface

  route: string = ''
  buttonText: string = data.buttonTexts[0];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.config.forEach((item: any) => {
      if (item.path.includes(this.item.slug)) {
        this.route = `/${item.path}`;
      }
    })
    console.log(this.item);
  }  
}
