import { Input, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-grid-product',
  templateUrl: './grid-product.component.html',
  styleUrls: ['./grid-product.component.css']
})
export class GridProductComponent implements OnInit {

  showSignUp: Boolean = false;
  product!: Product;  
  threshold!: Number;

  modal_type: String = "register";

  @Input('products')
  data!:any;

  title_modal = "Effettua il login";
      
  @Input('user')
  user!: User;  

  @Output()
  addProductEvent = new EventEmitter<{ product: Product, user: User, threshold: Number}>();

  constructor() {
    this.product = new Product("", "", "", "", "");
  }

  ngOnInit(): void {
  }

  openSignup() {
    this.showSignUp = !this.showSignUp;
    if(this.showSignUp == false) {
      this.title_modal = "Effettua il login";
    }
    else {
      this.title_modal = "Effettua la registrazione";
      this.modal_type = "register";
    }
  }

  addProduct(product: Product) {
    this.addProductEvent.emit({ product: product, user: this.user, threshold: this.threshold });
  }

}

