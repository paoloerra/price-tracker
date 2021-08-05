import { Component, Input, Output } from '@angular/core';
import { ProductsService } from './_service/products.service';
import { NgxSpinnerService } from "ngx-spinner";
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
  products: any;
  user: any;
  
  isLoggedIn = false;

  constructor(private product: ProductsService, private spinner: NgxSpinnerService, private tokenStorageService: TokenStorageService) {
    this.user = JSON.parse(this.tokenStorageService.getUser())

   }  

  getProduct($event: any) {
    this.spinner.show();
    this.product.getProducts($event.query, $event.source).subscribe(data => {
      this.spinner.hide()
      this.products = data;
      console.log(this.products);
    });
  }

  addProduct($event: any) {
    this.spinner.show();
    this.product.addProduct($event.product, $event.user, $event.threshold).subscribe(data => {
      this.spinner.hide();
      console.log(data);
    });
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
