import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FilterData } from 'src/shared/models/filterModel';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
    this.defaultFilter = this.filters[0]['type'];
  }
  filters = [
    { type: '--Select Category--', value: '--Select Category--' },
    { type: 'Category', value: 'c' },
    { type: 'Name', value: 's' },
    { type: 'Ingredient', value: 'i' },
  ]
  defaultFilter: string;
  @Output() filterData = new EventEmitter<FilterData>();
  ngOnInit(): void {
  }

  onChange(filter: any) {

  }
  SearchDrink(drinkData: FilterData) {
    let errorMsg = '';
    if (drinkData.filterType == '--Select Category--')
      errorMsg = 'select valid category<br/>';

    if (drinkData.filterValue == '')
      errorMsg += 'select valid name';

    if (errorMsg !== '') {
      Swal.fire('Alert', errorMsg, 'info');
      return;
    }
    this.filterData.emit(drinkData);
  }
}
