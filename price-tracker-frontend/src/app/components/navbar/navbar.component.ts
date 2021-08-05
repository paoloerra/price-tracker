import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/model/user';
import { TokenStorageService } from 'src/app/_service/token-storage.service';

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

  settings: String = "Settings";
  
  modal_type = "profile";
  
  @Input()
  msgFromParent: any;

  @Output()
  productEvent = new EventEmitter<{ query: String, source: String }>();

  @Output()
  logoutEvent = new EventEmitter<any>();

  user!: any;

  constructor(private spinner: NgxSpinnerService, private dataStorage: TokenStorageService) { 
    this.user = JSON.parse(dataStorage.getUser());
  }

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
