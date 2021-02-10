import { Component, OnInit } from '@angular/core';
import { Drinks } from 'src/shared/models/drinkModel';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private cocktailService: CocktailService) { }
  drinks: Drinks[] = [];
  ngOnInit(): void {
    this.loadDrinks('s', 'margarita');
  }

  loadDrinks(filterType: string, filterValue: string) {
    this.cocktailService.getCocktailByName(filterType, filterValue).subscribe((drink: any) => {
      this.drinks = drink.drinks;
    })
  }

  getDrinkDetails(drinkId: string) {
    console.log(drinkId);
  }

  filterType(filterType: string) {
    this.loadDrinks(filterType, 'margarita');
  }
}
