import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  setting_type: String = "data";

  constructor() { }
  

  ngOnInit(): void {
  }
  
  changeSetting(setting : String){
    this.setting_type = setting;
  }



}
