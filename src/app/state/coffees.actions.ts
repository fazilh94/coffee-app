import { createAction, props } from "@ngrx/store";
import { Coffee } from "../coffee-list/coffee.model";


export const loadCoffees = createAction('[Coffee List] Load Coffees');
export const loadCoffee = createAction('[Coffee List] Load Coffee');

export const loadCoffeesSuccess = createAction('[Coffee List] Load Coffees Success', props<{coffees: Coffee[]}>());
export const loadCoffeeSuccess = createAction('[Coffee List] Load Coffee Success', props<{coffee: Coffee}>());

export const loadCoffeesError = createAction('[Coffee List] Load Coffees Error');
export const loadCoffeeError = createAction('[Coffee List] Load Coffee Error');


export const allCoffeesLoaded = createAction(
    '[Load Courses Effect] All Coffees Loaded',
    props<{coffees: Coffee[]}>()
  )