import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuToggleService {
  private cartToggle: boolean = false;
  private menuToggle: boolean = false;
  private subjectCart = new Subject<boolean>();
  private subjectMenu = new Subject<boolean>();

  constructor() { }
  
  // Toggle Cart Menu

  setCartToggle(toggle: boolean): void {
    if (this.menuToggle) {
      this.setMenuToggle(false);
    }
    this.cartToggle = toggle;
    this.subjectCart.next(this.cartToggle);
  }

  cartToggled(): Observable<boolean> {
    return this.subjectCart.asObservable();
  }

  // Toggle Menu Hamburger

  setMenuToggle(toggle: boolean): void {
    if (this.cartToggle) {
      this.setCartToggle(false);
    }
    this.menuToggle = toggle;
    this.subjectMenu.next(this.menuToggle);
  }

  menuToggled(): Observable<boolean> {
    return this.subjectMenu.asObservable();
  }
}
