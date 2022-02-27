import { Component, OnInit } from '@angular/core';
import { data } from '../../../assets/data/data';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss']
})
export class NavLinksComponent implements OnInit {

  categories: Array<string> = data.categories.map(c => c.category);

  constructor() { }

  routeClicked(): void {
    window.scrollTo(0, 0);
  }

  ngOnInit(): void { }

}
