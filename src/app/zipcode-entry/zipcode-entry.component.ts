import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import {LocationService} from "../location.service";
import { State } from '../reducers/index';
import { AddZipcode } from '../actions/zipcode.actions';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent {

  constructor(private store: Store<State>, private service : LocationService) { }

  addLocation(zipcode : string){
    this.store.dispatch(new AddZipcode(zipcode));
    this.service.addLocation(zipcode);
  }
}
