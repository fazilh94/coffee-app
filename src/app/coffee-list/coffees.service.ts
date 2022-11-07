import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coffee } from './coffee.model';

@Injectable({
  providedIn: 'root'
})
export class CoffeesService {

  constructor(private http: HttpClient) {}

  getCoffees(): Observable<Array<Coffee>> {
    return this.http
      .get< Coffee[]>(
        'https://random-data-api.com/api/coffee/random_coffee?size=50'
      );
  }
}
