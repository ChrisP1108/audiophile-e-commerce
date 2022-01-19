import { Component } from '@angular/core';
import { Router } from '@angular/router';
import '../styles.scss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeNot(url: string): boolean {
    return this.router.url !== url;
  }
}
