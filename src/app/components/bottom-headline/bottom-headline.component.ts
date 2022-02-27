import { Component, OnInit } from '@angular/core';
import { data } from '../../../assets/data/data';
import { BottomHeadlineInterface } from './bottom-headline.component.interfaces';

@Component({
  selector: 'app-bottom-headline',
  templateUrl: './bottom-headline.component.html',
  styleUrls: ['./bottom-headline.component.scss']
})
export class BottomHeadlineComponent implements OnInit {

  content: BottomHeadlineInterface = data.bottomHeadline;

  constructor() { }

  ngOnInit(): void { }

}
