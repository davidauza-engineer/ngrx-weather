import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs/index';
import { catchError, map, mergeMap, filter } from 'rxjs/operators';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';

import { WeatherService } from '../weather.service';
import { ForecastLoaded, ForecastLoadFailed } from '../actions/forecast.actions';

@Injectable()
export class ForecastEffects {

  @Effect()
  loadCurrentConditions$: Observable<any> = this.actions$.pipe(
      ofType<RouterNavigationAction>(ROUTER_NAVIGATION),
      filter(action => action.payload.event.url.startsWith('/forecast')),
      mergeMap(action => {
        let zipcode = action.payload.event.url.split('/').pop();
        return this.weatherService.getForecast(zipcode).pipe(
            // If successful, dispatch success action with result
            map(data => new ForecastLoaded(data)),
            catchError(error => of(new ForecastLoadFailed(zipcode, error)))
        )
      }
    )
  )
  constructor(private actions$: Actions, private weatherService: WeatherService) {}
}
