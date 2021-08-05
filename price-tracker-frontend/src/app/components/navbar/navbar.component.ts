import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showSignUp: Boolean = false;

  query!: String;

  source: String = "amazon.it.All";
 
  setting_type: String = "data";

  title_modal = "Effettua il login";

  profile: String = "Profilo";

  constructor(private spinner: NgxSpinnerService) { }

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

  openSignup() {
    this.showSignUp = !this.showSignUp;
    if(this.showSignUp == false) {
      this.title_modal = "Effettua il login";
    }
    else {
      this.title_modal = "Effettua la registrazione";
    }
  }

}
