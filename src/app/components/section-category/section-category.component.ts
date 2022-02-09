import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from '../../../data';
import { productInterface } from '../../app-interfaces';

@Component({
  selector: 'app-section-category',
  templateUrl: './section-category.component.html',
  styleUrls: ['./section-category.component.scss']
})
export class SectionCategoryComponent implements OnInit {

  constructor(private router: Router) { }

  category: any = data.categories.find((d: any) => 
    this.router.url.includes(d.category)
  );

  products: productInterface[] = this.category.products.map((d: any) => 
    data.products.find((p: any) => p.id === d)
  );

  ngOnInit(): void { 
    window.scrollTo(0,0);
  }



}
