import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Action, ActionReducer } from '@ngrx/store';
import { interval } from 'rxjs/observable/interval';
import { Effect } from '@ngrx/effects';
import { Router } from '@angular/router';


export function reducer(state: number = 0, action): number {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'subtract':
      return state - 1;
    default:
      return 0;
  }
}

@Injectable()
export class DemoEffects {
  constructor() {
    console.log('Instantiating DemoEffects');
  }

  @Effect() add$ = interval(1000).map(() => ({ type: 'add' }));
}

@Injectable()
export class RouterEffects {
  constructor(router: Router) {
    console.log(router);
  }

  @Effect() add$ = interval(3000).map(() => ({ type: 'add' }));
}