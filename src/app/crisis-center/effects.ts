import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { interval } from 'rxjs/observable/interval';


@Injectable()
export class DemoEffects {
  @Effect() subtract$ = interval(500)
    .map(() => ({ type: 'subtract' }));
}