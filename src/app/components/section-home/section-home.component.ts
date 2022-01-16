import { Component, OnInit } from '@angular/core';
import { data } from '../../../data';

@Component({
  selector: 'app-section-home',
  templateUrl: './section-home.component.html',
  styleUrls: ['./section-home.component.scss']
})
export class SectionHomeComponent implements OnInit {

  constructor() { }

  newProduct: any = data.products.find(d => 
    d.id === data.newProduct  
  );

  ngOnInit(): void {
  }

}
