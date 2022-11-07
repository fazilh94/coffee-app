import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Coffee } from '../coffee-list/coffee.model';
import { selectCoffees } from '../state/coffees.selectors';

@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.scss'],
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CoffeeDetailsComponent implements OnInit {
public coffee:Coffee;
  constructor(private route:ActivatedRoute,
    private store:Store) { }

  ngOnInit(): void {
    const id=this.route.snapshot.params['id'];
    this.store.select(selectCoffees)
      .subscribe((data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].id === +id) {
            this.coffee = data[i];
            console.log(this.coffee);
            break;
          }
        }
      });

    
  }

}
