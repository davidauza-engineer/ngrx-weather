import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { LocationService } from '../location.service';
import { AddZipcode } from '../actions/zipcode.actions';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  constructor(private store: Store<State>, private service : LocationService) { }

  addLocation(zipcode : string){
    this.store.dispatch(new AddZipcode(zipcode));
    this.service.addLocation(zipcode);
  }
}
