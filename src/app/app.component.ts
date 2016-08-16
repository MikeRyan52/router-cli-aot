import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  template: `
    <h1 class="title">Component Router {{ state$ | async }}</h1>
    <nav>
      <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/crisis-center/admin" routerLinkActive="active">Crisis Admin</a>
      <a routerLink="/login" routerLinkActive="active">Login</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['styles.css']
})
export class AppComponent {
  constructor(public state$: Store<number>) { }
}
