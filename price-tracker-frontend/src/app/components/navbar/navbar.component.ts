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
  source: String = "amazon.it.All";

  @Input()
  msgFromParent: any;
  

  @Output()
  productEvent = new EventEmitter<{ query: String, source: String }>();

  @Output()
  logoutEvent = new EventEmitter<any>();

  logout(): any {

    this.logoutEvent.emit();

  }

  ngOnInit(): void {
  }
  
  changeSetting(setting : String){
    this.setting_type = setting;
  }

  findProduct() {
    this.productEvent.emit({ query: this.query, source: this.source });
  }

}
