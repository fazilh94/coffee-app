import { createReducer, on } from "@ngrx/store";
import { Coffee } from "../coffee-list/coffee.model";
import { loadCoffeesSuccess } from "./coffees.actions";




const initialState: Coffee[] = [];

export const coffeesReducer = createReducer(
  initialState,
  on(loadCoffeesSuccess, (state,{coffees} ) => coffees )
);