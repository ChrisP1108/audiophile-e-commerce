import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuToggleService } from './services/menu-toggle/menu-toggle.service';
import '../styles.scss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuToggled: boolean = false;
  cartToggled: boolean = false;
  checkoutToggled: boolean = false;
  footerPosition: number = 0;

  @ViewChild('footer', { static: false, read: ElementRef })
  footer!: ElementRef;

  constructor(private router: Router, 
    private menuToggle: MenuToggleService) { 
      this.menuToggle.menuToggled().subscribe((value: boolean) => {
        if (this.cartToggled) {
          this.cartToggled = false;
        }
        this.menuToggled = value;
        if (value) {
          this.toggleScrollBar(false);
        } else this.toggleScrollBar(true);
      });
      this.menuToggle.cartToggled().subscribe((value: boolean) => {
        if (this.menuToggled) {
          this.menuToggled = value;
        }
        this.cartToggled = value;
        if (value) {
          this.toggleScrollBar(false);
        } else this.toggleScrollBar(true);
      });
      this.menuToggle.checkoutToggled().subscribe((value: boolean) => {
        this.checkoutToggled = value;
        if (value) {
          this.toggleScrollBar(false);
        } else this.toggleScrollBar(true);
      });
  }

  toggleScrollBar(value: boolean): void {
    const hideScroll: any = document.querySelector('body');
    if (value) {
      hideScroll.style.overflowY = "auto"
    } else hideScroll.style.overflowY = "hidden";
  }

  overlayClick(): void {
    this.menuToggle.setCartToggle(false);
    this.menuToggle.setMenuToggle(false);
    if (this.router.url !== '/checkout') {
      this.menuToggle.setCheckoutToggle(false);
      this.checkoutToggled = false;
    }
  }

  routeNot(url: string): boolean {
    return this.router.url !== url;
  }

  @HostListener('window:resize', ['$event'])
  handleResize() {
    this.footerPosition = this.footer.nativeElement.offsetTop +
    this.footer.nativeElement.clientHeight;
  }

  ngOnInit(): void { 
    setTimeout(() => {
      this.footerPosition = this.footer.nativeElement.offsetTop +
      this.footer.nativeElement.clientHeight;
    }, 0)
    this.toggleScrollBar(true);
    if (window.location.href.includes("audiophile-e-commerce") && window.location.href.includes("#")) {
      const redirect = "/" + window.location.href.slice(52);
      console.log("Page redirected to " + redirect);
      this.router.navigate([redirect])
    }
  }
}
