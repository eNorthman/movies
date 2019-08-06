import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'movies-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchText: string;
  @Output() public search: EventEmitter<string> = new EventEmitter();

  constructor() { }

  public ngOnInit() {

  }

  public doSearch(): void {
    console.log(this.searchText);
    this.search.emit(this.searchText);
  }

}
