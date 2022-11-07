import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeDetailsComponent } from './coffee-details/coffee-details.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { CoffeeListContainerComponent } from './containers/coffee-list-container.component';

const routes: Routes = [
  { path: 'coffees', component: CoffeeListContainerComponent, title:'Ngrx - CoffeeHouse' },
  { path: 'coffee/:id',loadComponent:()=> import('./coffee-details/coffee-details.component')
  .then(mod=>mod.CoffeeDetailsComponent),
  title: 'Coffee - Details' },
  { path: '', redirectTo: '/coffees', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
