import { Component, OnInit, Input } from '@angular/core';
import { data } from '../../../data'

@Component({
  selector: 'app-other-product-list',
  templateUrl: './other-product-list.component.html',
  styleUrls: ['./other-product-list.component.scss']
})
export class OtherProductListComponent implements OnInit {

  @Input() others: any

  otherHeadline: string = data.otherHeadline
  
  constructor() { }

  ngOnInit(): void { }

}
