import { Component, OnInit } from '@angular/core';
import { data } from '../../../data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-products',
  templateUrl: './section-products.component.html',
  styleUrls: ['./section-products.component.scss']
})
export class SectionProductsComponent implements OnInit {

  constructor(private router: Router) { }

  product: any = data.products.find((p: any) => 
    this.router.url.includes(p.slug)
  );

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

}
