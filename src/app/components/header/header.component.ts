import { Component, OnInit } from '@angular/core';
import { data } from '../../../data';
import { MenuToggleService } from '../../services/menu-toggle/menu-toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuToggled: boolean = false;
  cartToggled: boolean = false;

  constructor(private menuToggle: MenuToggleService) {
    this.menuToggle.menuToggled().subscribe(value => {
      this.menuToggled = value;
    });
    this.menuToggle.cartToggled().subscribe(value => {
      this.cartToggled = value;
    });
  }

  categories: Array<string> = data.categories.map(c => c.category);

  menuToggler(): void {
    this.menuToggle.setMenuToggle(!this.menuToggled);
  }

  cartToggler(): void {
    this.menuToggle.setCartToggle(!this.cartToggled);
  }

  ngOnInit(): void {

  }

}
