import { Component, OnInit } from '@angular/core';
import { data } from '../../../assets/data/data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerText: string = data.footerText;
  currentYear: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void { }

}
