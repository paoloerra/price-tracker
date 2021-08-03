import { Component } from '@angular/core';
import { ProductsService } from './_service/products.service';
import { NgxSpinnerService } from "ngx-spinner";


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

  constructor(private product: ProductsService, private spinner: NgxSpinnerService) { }

  getProduct($event: any) {
    this.spinner.show();
    this.product.getProducts($event.query, $event.source).subscribe(data => {
      this.spinner.hide()
      this.products = data;
      console.log(this.products);
    });
  }
}
