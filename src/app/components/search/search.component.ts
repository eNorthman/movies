import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'movies-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() public tall = false;
  @Output() public search: EventEmitter<string> = new EventEmitter();
  public searchText: string;

  constructor() { }

  public ngOnInit() {

  }

  public doSearch(): void {
    console.log(this.searchText);
    this.search.emit(this.searchText);
  }

}
