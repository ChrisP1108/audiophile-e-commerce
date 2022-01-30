import { Component, OnInit, Input } from '@angular/core';
import { data } from '../../../data'

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {

  @Input() promotionsData: any
  buttonText: string = data.buttonTexts[0];

  constructor() { }

  ngOnInit(): void {
    console.log(this.promotionsData);
  }

}
