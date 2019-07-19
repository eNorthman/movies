import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'movies-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchText: string;
  @Output() public onSearch: EventEmitter<string> = new EventEmitter();

  constructor() { }

  public ngOnInit() {

  }

  public search(): void {
    console.log(this.searchText);
    this.onSearch.emit(this.searchText);
  }

}
