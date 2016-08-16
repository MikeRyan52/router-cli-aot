// #docregion
// #docplaster
import { Component } from '@angular/core';
import { EffectsSubscription } from '@ngrx/effects';

// #docregion minus-imports
@Component({
  template:  `
    <h2>CRISIS CENTER</h2>
    <router-outlet></router-outlet>
  `
})
export class CrisisCenterComponent {
  constructor(private subscription: EffectsSubscription) { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
// #enddocregion minus-imports
// #enddocregion
