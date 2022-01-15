import { Component } from '@angular/core';
import { data } from '../data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'audiophile-e-commerce';

}

const type = 'promotions';


const products: Array<Object> = data[type];
console.log(products);
