import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  menuToggled: boolean = false;
  cartToggled: boolean = false;

  menuToggler(): void {
    if (this.cartToggled) {
      this.cartToggled = false;
    }
    this.menuToggled = !this.menuToggled;
  }

  cartToggler(): void {
    if (this.menuToggled) {
      this.menuToggled = false;
    }
    this.cartToggled = !this.cartToggled;
  }

  reload(): void {
    window.location.reload();
  }

  ngOnInit(): void {

  }

}
