import { createAction, props } from "@ngrx/store";
import { Coffee } from "../coffee-list/coffee.model";


export const loadCoffees = createAction('[Coffee List] Load Coffees');

export const loadCoffeesSuccess = createAction('[Coffee List] Load Coffees Success', props<{coffees: Coffee[]}>());

export const loadCoffeesError = createAction('[Coffee List] Load Coffees Error');


export const allCoffeesLoaded = createAction(
    '[Load Courses Effect] All Coffees Loaded',
    props<{coffees: Coffee[]}>()
  )