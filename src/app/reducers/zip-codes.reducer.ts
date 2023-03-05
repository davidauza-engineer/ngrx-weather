import { Action } from '@ngrx/store';
import { ZipcodeActionTypes, ZipcodeActions } from '../actions/zipcode.actions';


export interface ZipcodeState {
  zipcodes: String[]
}

export const initialState: ZipcodeState = {
  zipcodes: []
};

export function zipcodeReducer(state = initialState, action: ZipcodeActions): ZipcodeState {
  switch (action.type) {
    case ZipcodeActionTypes.AddZipcode:
      return {...state, zipcodes: [...state.zipcodes, action.zipcode]};
    case ZipcodeActionTypes.RemoveZipcode:
      return {...state, zipcodes: state.zipcodes.filter(zipcode => zipcode !== action.zipcode)};
    default:
      return state;
  }
}
