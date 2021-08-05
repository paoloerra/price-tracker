import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/_service/products.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  wishList:any;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getWishList().subscribe(data => {
      this.wishList = data;      
    })
  }

}
