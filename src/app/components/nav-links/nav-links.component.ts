import { Component, OnInit } from '@angular/core';
import { data } from '../../../data';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss']
})
export class NavLinksComponent implements OnInit {

  categories: Array<string> = data.categories.map(c => c.category);

  constructor() { }

  ngOnInit(): void { }

}
