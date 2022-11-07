import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CoffeesEffects } from './state/coffees.effects';
import { coffeesReducer } from './state/coffees.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AgGridModule } from 'ag-grid-angular';
import { CoffeeDetailsComponent } from './coffee-details/coffee-details.component';
import { CoffeeListContainerComponent } from './containers/coffee-list-container.component';

import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeListComponent,
    CoffeeDetailsComponent,
    CoffeeListContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule,
    StoreModule.forRoot({coffees: coffeesReducer}),
    EffectsModule.forRoot([CoffeesEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
