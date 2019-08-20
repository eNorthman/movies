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
    this.searchForm.valueChanges
    .pipe(
      distinctUntilChanged(),
      debounceTime(500),
      filter((value: SearchForm) => value && value.search && value.search.length > 2 ),
    )
    .subscribe(() => this.doSearch());
  }

  public doSearch(): void {
    this.search.emit(this.searchText);
  }

}
