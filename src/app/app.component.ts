import { Component } from '@angular/core';
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

  constructor(private router: Router, 
    public menuToggle: MenuToggleService) { 
      this.menuToggle.menuToggled().subscribe(value => {
        if (this.cartToggled) {
          this.cartToggled = false;
        }
        this.menuToggled = value;
      });
      this.menuToggle.cartToggled().subscribe(value => {
        if (this.menuToggled) {
          this.menuToggled = value;
        }
        this.cartToggled = value;
      });
  }

  checkoutOverlayClick(): void {
    this.menuToggle.setCartToggle(false);
    this.menuToggle.setMenuToggle(false);
    this.menuToggled = false;
    this.cartToggled = false;
  }

  routeNot(url: string): boolean {
    return this.router.url !== url;
  }

  ngOnInit(): void {
  }
}
