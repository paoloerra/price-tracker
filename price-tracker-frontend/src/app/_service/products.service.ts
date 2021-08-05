import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { User } from '../model/user';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient, private tokenService: TokenStorageService) { }

  products: any;

  getProducts(query: any, source: any): Observable<any> {
    return this.http.get<any>('https://www.whenitdrop.com/api/products/search', {
      params: {
        query: query,
        source: source,
        page: 1
      }
    });
  }

  getWishList(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/user/getUserWishList/1', {
      headers: new HttpHeaders(
        {
          'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiaWF0IjoxNjI4MTY4OTkyLCJleHAiOjE2MjgxNzYxOTJ9.FhcZhjHcCWL5xaN3Cmy1mIX4ZWnP03us9jJJXbQjm9ILBHiKz4uUwflPh6VwmWjUZ77CCZmlyeeKAGWk_fKH_g',
          'Content-Type': 'application/json'
        }
      )
    });
  }

  addProduct(product: Product, user: User, threshold: number) {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiaWF0IjoxNjI4MTY4OTkyLCJleHAiOjE2MjgxNzYxOTJ9.FhcZhjHcCWL5xaN3Cmy1mIX4ZWnP03us9jJJXbQjm9ILBHiKz4uUwflPh6VwmWjUZ77CCZmlyeeKAGWk_fKH_g'
      })
    };

    return this.http.post<any>('http://localhost:8080/api/product', {
      id: product.storeId,
      image: product.image,
      name: product.name,
      price: product.priceCurrent,
      link: product.storeLink,
      user_id: 1,
      threshold: threshold
    }, headers);
  }

  public setProducts(products: any) {
    this.products = products;
  }

  public getProduct() {
    return this.products;
  }

}
