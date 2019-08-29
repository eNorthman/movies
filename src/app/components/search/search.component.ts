import { Component, Output, EventEmitter, Input, ViewChild, AfterViewInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

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
  @Output() public search: EventEmitter<string> = new EventEmitter();
  @ViewChild('searchForm') public searchForm;

  public searchText: string;

  constructor() { }

  public ngAfterViewInit() {

  }

  public doSearch(): void {
    this.search.emit(this.searchText);
  }

}
