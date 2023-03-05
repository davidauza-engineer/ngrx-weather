import { Action } from '@ngrx/store';

export enum ZipcodeActionTypes {
  LoadZipcodes = '[Zipcode] Load Zipcodes'
}

export class Zipcode implements Action {
  readonly type = ZipcodeActionTypes.LoadZipcodes;
}

export type ZipcodeActions = LoadZipcodes;
