import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { Store } from '@ngrx/store';

import {WeatherService} from "../weather.service";
import {LocationService} from "../location.service";
import { State } from '../reducers/index';
@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

  zipcodes: String[];

  constructor(private store: Store<State>, private weatherService : WeatherService, private locationService : LocationService,
              private router : Router) {
    store.select(state => state.zipcodes).subscribe(zips => this.zipcodes = zips.zipcodes);
  }

  getCurrentConditions() {
    return this.weatherService.getCurrentConditions();
  }

  showForecast(zipcode : string){
    this.router.navigate(['/forecast', zipcode])
  }
}
