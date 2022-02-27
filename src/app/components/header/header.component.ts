import { Component, OnInit, ElementRef, Input, ViewChild, HostListener } from '@angular/core';
import { MenuToggleService } from '../../services/menu-toggle/menu-toggle.service';
import { Router } from '@angular/router';
import { data } from '../../../assets/data/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() footerPosition: any;

  menuToggled: boolean = false;
  cartToggled: boolean = false;
  checkoutToggled: boolean = false;
  shiftHeader: number = 0;
  categoryType: string = '';
  goBackText: string = data.buttonTexts[6];
  goBackScrolled: boolean = false;

  @ViewChild('headerContainer', { static: false, read: ElementRef })
  header!: ElementRef;

  @ViewChild('goBackContainer', { static: false, read: ElementRef })
  goBack!: ElementRef;

  constructor(private router: Router, private menuToggle: MenuToggleService) {
    this.menuToggle.menuToggled().subscribe((value: boolean) => {
      this.menuToggled = value;
    });
    this.menuToggle.cartToggled().subscribe((value: boolean) => {
      this.cartToggled = value;
    });
    this.menuToggle.checkoutToggled().subscribe((value: boolean) => {
      this.checkoutToggled = value;
    });
  }

  menuToggler(): void {
    this.menuToggle.setMenuToggle(!this.menuToggled);
  }

  cartToggler(): void {
    if (this.routeIncludes('checkout')) {
      return
    }
    this.menuToggle.setCartToggle(!this.cartToggled);
  }

  @HostListener('window:click', ['$event'])
  @HostListener('window:scroll', ['$event'])
  @HostListener('window:resize', ['$event'])
  handleHeight() {
    const scrollY = window.scrollY + window.innerHeight + this.header.nativeElement.clientHeight;
    const footerY = this.footerPosition + this.header.nativeElement.clientHeight;
    if (scrollY >= footerY) {
      this.shiftHeader = -100;
    } else {
      this.shiftHeader = 0;
    }
    if (window.scrollY > 10) {
      if(this.router.url.includes('products') || this.router.url.includes('checkout')) {
        this.goBackScrolled = true;
      }
    } else this.goBackScrolled = false;
  }

  routeIncludes(url: string): boolean {
    this.categoryType = this.router.url.slice(10);
    if (this.router.url.includes(url)) {
      return true
    } else return false
  }

  goBackRouteDisplay(): boolean {
    if (this.router.url.includes('products') || this.router.url === '/checkout') {
      return true
    } else return false
  }

  goBackRoute(): void {
    window.history.back();
  }

  ngOnInit(): void { }

}
