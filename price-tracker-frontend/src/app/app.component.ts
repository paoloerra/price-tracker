import { Component } from '@angular/core';
import { TokenStorageService } from './_service/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'price-tracker-frontend-bootstrap';
  query!: String;
  source!: String;
  products: any;
  user: any;

  bestProducts: any;

  isLoggedIn = false;

  constructor(private tokenStorageService: TokenStorageService) { 
    this.user = JSON.parse(this.tokenStorageService.getUser())    
  }  

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();    
    if(this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();      
    }
  }
  
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
