import { Component, OnInit, ElementRef, Input, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-category-heading',
  templateUrl: './category-heading.component.html',
  styleUrls: ['./category-heading.component.scss']
})
export class CategoryHeadingComponent implements OnInit {

  @Input() headline: any;
  scrolled: boolean = false;

  @ViewChild('categoryContainer', { static: false, read: ElementRef })
  category!: ElementRef;

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const scrollY = window.scrollY;
    const categoryY = this.category.nativeElement.clientHeight;
    if (scrollY >= categoryY) {
      this.scrolled = true;
    } else this.scrolled = false;
  }

  ngOnInit(): void {
  }

}
