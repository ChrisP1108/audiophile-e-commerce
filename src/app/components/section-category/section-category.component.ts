import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from '../../../data';

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

  products: any = this.category.products.map((d: number) => 
    data.products.find((p: any) => p.id === d)
  );


  // categoryData: any = data.

  ngOnInit(): void {
    console.log(this.category)
    console.log(this.products)
  }



}
