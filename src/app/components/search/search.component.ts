import { Component, Input, AfterViewInit } from '@angular/core';

export interface SearchForm {
  search: string;
}

@Component({
  selector: 'movies-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit {
  @Input() public tall = false;

  public searchText: string;

  constructor() { }

  public ngAfterViewInit() {}

  public doSearch(): void {
    // It would be nice to emit an event overhere. ^^
  }

}
