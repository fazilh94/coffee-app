import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { CoffeesService } from "../coffee-list/coffees.service";

import { loadCoffees, loadCoffeesError, loadCoffeesSuccess } from "./coffees.actions";

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
        private coffeesHttpService:CoffeesService){

    }
} 