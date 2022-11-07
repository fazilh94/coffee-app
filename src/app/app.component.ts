import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import { loadCoffees } from './state/coffees.actions';
import { selectCoffees } from './state/coffees.selectors';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
  ) {}

  ngOnInit() {

  }
}

