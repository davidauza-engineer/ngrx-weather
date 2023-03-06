import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

import {LocationService} from "../location.service";
import { State } from '../reducers/index';
import { AddZipcode } from '../actions/zipcode.actions';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent {
  @Output() zipAdded = new EventEmitter<string>();
}
