import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { loadCoffees } from "../state/coffees.actions";
import { selectCoffees } from "../state/coffees.selectors";


@Component({
    templateUrl:'./coffee-list-container.component.html',

})
export class CoffeeListContainerComponent implements OnInit{
    coffees$ = this.store.select(selectCoffees);

    constructor(
        private store: Store<AppState>
      ) {}
    
    ngOnInit(): void {
    this.store.dispatch(loadCoffees());

        
    }

}