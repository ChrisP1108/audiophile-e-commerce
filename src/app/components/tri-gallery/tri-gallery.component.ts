import { Component, OnInit, Input, HostListener } from '@angular/core';
import { productInterface } from '../../app-interfaces';
import { data } from '../../../assets/data/data';
import { galleryInterface } from '../section-products/section-products.component-interfaces';

@Component({
  selector: 'app-tri-gallery',
  templateUrl: './tri-gallery.component.html',
  styleUrls: ['./tri-gallery.component.scss']
})
export class TriGalleryComponent implements OnInit {

  @Input() gallery!: galleryInterface;

  first: string = '';
  second: string = '';
  third: string = '';
  
  constructor() { }

  @HostListener('window:resize', ['$event'])
  setResponsive() {
    if (window.innerWidth < 768) {
      this.first = this.gallery.first.mobile;
      this.second = this.gallery.second.mobile;
      this.third = this.gallery.third.mobile;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      this.first = this.gallery.first.tablet;
      this.second = this.gallery.second.tablet;
      this.third = this.gallery.third.tablet;
    } else {
      this.first = this.gallery.first.desktop;
      this.second = this.gallery.second.desktop;
      this.third = this.gallery.third.desktop;
    }

  }

  ngOnInit(): void { 
    this.setResponsive();
  }

}
