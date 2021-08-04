import { Component } from '@angular/core';
import { ProductsService } from './_service/products.service';
import { NgxSpinnerService } from "ngx-spinner";
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
  user!: User;

  constructor(private product: ProductsService, private spinner: NgxSpinnerService) {
    this.user = new User(1, "", "", "guest", 0);
  }

  getProduct($event: any) {
    this.spinner.show();
    this.product.getProducts($event.query, $event.source).subscribe(data => {
      this.spinner.hide();
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
