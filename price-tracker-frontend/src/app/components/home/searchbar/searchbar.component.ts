import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  query!: String;
  source: String = "amazon.it.All";

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  productEvent = new EventEmitter<{ query: String, source: String }>();

  findProduct() {    
    this.productEvent.emit({ query: this.query, source: this.source });
  }

}
