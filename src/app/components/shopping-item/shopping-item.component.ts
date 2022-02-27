import { Component, OnInit, Input } from '@angular/core';
import { itemInterface } from './shopping-item.component.interfaces';
import { MenuToggleService } from '../../services/menu-toggle/menu-toggle.service';
import { data } from '../../../assets/data/data';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {

  @Input() item!: itemInterface;
  buttonText: string = data.buttonTexts[1];
  
  constructor(private menuToggle: MenuToggleService) { }

  itemClick() {
    this.menuToggle.setMenuToggle(false);
  }
  ngOnInit(): void { }

}
