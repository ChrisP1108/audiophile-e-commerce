import { Component } from '@angular/core';
import { Router } from '@angular/router';
import '../styles.scss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) { }

  menuToggled: boolean = false;
  cartToggled: boolean = false;

  yScrollHide(toggle: boolean): void {
    if (toggle) {
      document.body.style.overflowY = 'clip';
    } else {
      document.body.style.overflowY = 'visible';
    }
  }

  toggleMenu(): void {
    if (this.cartToggled) {
      this.cartToggled = false;
    }
    this.menuToggled = !this.menuToggled;
    this.yScrollHide(this.menuToggled);
  }

  toggleCart(): void {
    if (this.menuToggled) {
      this.menuToggled = false;
    }
    this.cartToggled = !this.cartToggled;
    this.yScrollHide(this.cartToggled);
  }

  checkoutOverlayClick(): void {
    this.cartToggled = false;
    this.menuToggled = false;
    this.yScrollHide(false);
  }

  routeNot(url: string): boolean {
    return this.router.url !== url;
  }

  ngOnInit(): void {
  }
}
