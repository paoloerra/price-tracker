import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  setting_type: String = "data";

  constructor() { }

  query!: String;
  source!: String;
  

  @Output()
  productEvent = new EventEmitter<{ query: String, source: String }>();

  ngOnInit(): void {
  }
  
  changeSetting(setting : String){
    this.setting_type = setting;
  }

  findProduct(query: any, source: any) {
    this.productEvent.emit({ query: query, source: source });
  }

}
