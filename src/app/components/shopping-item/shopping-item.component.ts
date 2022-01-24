import { Component, OnInit, Input } from '@angular/core';
import { itemInterface } from './shopping-item.component.interfaces';
import { MenuToggleService } from '../../services/menu-toggle/menu-toggle.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {

  @Input() item!: itemInterface;
  
  constructor(private menuToggle: MenuToggleService) { }

  itemClick() {
    this.menuToggle.setMenuToggle(false);
  }
  ngOnInit(): void { }

}
