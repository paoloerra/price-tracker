import { Component } from '@angular/core';
import { TokenStorageService } from './_service/token-storage.service';
import { User } from './model/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'price-tracker-frontend-bootstrap';
  query!: String;
  source!: String;  
  user!: User;

  isLoggedIn = false;

  constructor(private tokenStorageService: TokenStorageService) { 
    this.user = new User(1, "", "", "guest", 0);
  }  

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    console.log("Loggato: "+this.isLoggedIn);
    if(this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      console.log("Utente:" +user);
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
