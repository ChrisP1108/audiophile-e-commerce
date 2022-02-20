import { Component, OnInit, ElementRef, Input, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-category-heading',
  templateUrl: './category-heading.component.html',
  styleUrls: ['./category-heading.component.scss']
})
export class CategoryHeadingComponent implements OnInit {

  @Input() headline: any;

  constructor() { }

  ngOnInit(): void {
  }

}
