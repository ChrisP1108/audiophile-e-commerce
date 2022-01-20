import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { data } from '../../../data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Output() menuToggle: EventEmitter<boolean> = new EventEmitter();
  @Output() cartToggle: EventEmitter<boolean> = new EventEmitter();

  categories: Array<string> = data.categories.map(c => c.category);

  menuToggler(): void {
    this.menuToggle.emit();
  }

  cartToggler(): void {
    this.cartToggle.emit();
  }

  reload(): void {
    window.location.reload();
  }

  ngOnInit(): void {
    console.log(this.categories)
  }

}
