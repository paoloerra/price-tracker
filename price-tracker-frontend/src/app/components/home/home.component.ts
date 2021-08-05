import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/_service/products.service';
import { NgxSpinnerService } from "ngx-spinner";

import { LoginComponent } from './login/login.component';
import { GridProductComponent } from './grid-product/grid-product.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FormUserComponent } from './form-user/form-user.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  products: any;

  constructor(private product: ProductsService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
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

}
