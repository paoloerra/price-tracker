import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-product',
  templateUrl: './grid-product.component.html',
  styleUrls: ['./grid-product.component.css']
})
export class GridProductComponent implements OnInit {

  showSignUp: Boolean = false;
  @Input('products')
  data!:any;

  title_modal = "Effettua il login";
  
  constructor() { }

  ngOnInit(): void {
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

