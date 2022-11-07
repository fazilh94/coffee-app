import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, filter, map, of, switchMap, withLatestFrom } from "rxjs";
import { CoffeesService } from "../coffee-list/coffees.service";

import { loadCoffee, loadCoffeeError, loadCoffees, loadCoffeesError, loadCoffeesSuccess, loadCoffeeSuccess } from "./coffees.actions";
import { selectCoffees } from "./coffees.selectors";

@Injectable()
export class CoffeesEffects {
loadCoffees$ = createEffect(
    ()=>this.actions$.pipe(
        ofType(loadCoffees),
        switchMap(() => this.coffeesHttpService.getCoffees().pipe(
            map(coffees=>loadCoffeesSuccess({coffees})),
            catchError(() => of(loadCoffeesError()))
        ))
    )
);
    

        
    constructor(private actions$: Actions,
        private coffeesHttpService:CoffeesService,
        private store:Store){

    }
} 