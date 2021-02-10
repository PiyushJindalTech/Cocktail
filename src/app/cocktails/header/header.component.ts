import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  filters = [
    { type: 'Category', value: 'c' },
    { type: 'Name', value: 's' },
    { type: 'Ingredient', value: 'i' },
  ]

  @Output() filterType = new EventEmitter<boolean>();
  ngOnInit(): void {
  }

  onChange(filter: any) {
    this.filterType.emit(filter.target.value);
  }
}
