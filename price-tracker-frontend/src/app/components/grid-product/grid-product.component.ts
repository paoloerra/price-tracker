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
  constructor() { }

  ngOnInit(): void {
  }

  openSignup() {
    this.showSignUp = !this.showSignUp;
  }
}

