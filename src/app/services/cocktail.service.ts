import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Drinks} from '../../shared/models/drinkModel';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }

  getCocktailByName(filterType: string, filterValue: string): Observable<Drinks>{
    return(this.http.get<Drinks>("https://www.thecocktaildb.com/api/json/v1/1/search.php?" + filterType +"=" + filterValue));
 }

}
