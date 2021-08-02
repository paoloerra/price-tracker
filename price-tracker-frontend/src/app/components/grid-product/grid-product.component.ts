import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-product',
  templateUrl: './grid-product.component.html',
  styleUrls: ['./grid-product.component.css']
})
export class GridProductComponent implements OnInit {

  showSignUp: Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  openSignup() {
    this.showSignUp = !this.showSignUp;
  }
}
