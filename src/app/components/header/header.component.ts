import { Component, OnInit, ElementRef, Input, EventEmitter, ViewChild, HostListener } from '@angular/core';
import { MenuToggleService } from '../../services/menu-toggle/menu-toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() footerPosition: any;

  @ViewChild('headerContainer', { static: false, read: ElementRef })
  header!: ElementRef;

  menuToggled: boolean = false;
  cartToggled: boolean = false;
  shiftHeader: number = 0;

  constructor(private menuToggle: MenuToggleService) {
    this.menuToggle.menuToggled().subscribe(value => {
      this.menuToggled = value;
    });
    this.menuToggle.cartToggled().subscribe(value => {
      this.cartToggled = value;
    });
  }

  menuToggler(): void {
    this.menuToggle.setMenuToggle(!this.menuToggled);
  }

  cartToggler(): void {
    this.menuToggle.setCartToggle(!this.cartToggled);
  }

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
  }

  ngOnInit(): void { }

}
