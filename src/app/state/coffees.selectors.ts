import { createFeatureSelector } from "@ngrx/store";
import { Coffee } from "../coffee-list/coffee.model";


export const selectCoffees = createFeatureSelector<Coffee[]>('coffees');