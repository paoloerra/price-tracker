import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../../_service/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  query!: String;
  source!: String;

  @Output()
  productEvent = new EventEmitter<{ query: String, source: String }>();

  ngOnInit(): void {
  }

  findProduct(query: any, source: any) {
    this.productEvent.emit({ query: query, source: source });
  }


}