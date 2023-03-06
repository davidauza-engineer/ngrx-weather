import { Action } from '@ngrx/store';

export enum ForecastActionTypes {
  LoadForecasts = '[Forecast] Load Forecasts'
}

export class Forecast implements Action {
  readonly type = ForecastActionTypes.LoadForecasts;
}

export type ForecastActions = LoadForecasts;
