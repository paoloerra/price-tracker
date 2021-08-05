import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/_service/products.service';

@Component({
  selector: 'app-carousel-products',
  templateUrl: './carousel-products.component.html',
  styleUrls: ['./carousel-products.component.css']
})
export class CarouselProductsComponent implements OnInit {
  bestProducts: any;
  _cols = 4;

  constructor(private product: ProductsService) { 
    this.bestProducts = this.getBestProduct();
  }

  ngOnInit(): void {
  }

  getBestProduct() {
    this.product.getBestProducts().subscribe(data => {
      this.bestProducts = data;
      console.log(this.bestProducts);
    });  
  }

  get cols() {
    return Array(this._cols).fill(null).map((el, index) => index);
  }
}
