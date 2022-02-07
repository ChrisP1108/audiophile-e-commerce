import { Component, OnInit, ElementRef, Input, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-category-heading',
  templateUrl: './category-heading.component.html',
  styleUrls: ['./category-heading.component.scss']
})
export class CategoryHeadingComponent implements OnInit {

  @Input() headline: any;
  @Input() headerShift: any;
  fixedCategoryShift: number = 100;
  headlineScaling: number = 1;

  @ViewChild('categoryContainer', { static: false, read: ElementRef })
  category!: ElementRef;

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const headerHeight = this.category.nativeElement.clientHeight;
    const scrollY = window.scrollY - headerHeight;
    console.log(headerHeight);
    console.log(scrollY);
    if (scrollY < 0) {
      const textScaler = (scrollY * -1) / (headerHeight);
      this.headlineScaling = textScaler <= 0.75 ? 0.75 : textScaler ;
      this.fixedCategoryShift = (scrollY * -1) / (headerHeight) * 100;
    }
    if (scrollY >= 0) {
      this.fixedCategoryShift = 0;
      this.headlineScaling = 0.75;
    }
    if ((scrollY * -1) === headerHeight) {
      this.headlineScaling = 1;
    }
  }

  ngOnInit(): void {
  }

}
