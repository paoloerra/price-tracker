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

  getBestProducts(): Observable<any> {
    return this.http.get<any>('https://www.whenitdrop.com/api/products/discounted', {
      params: {
        productsQuantity: 12,
        iteration: 12,
        slice: 1
      }
    });
  }  
  getWishList(): Observable<any> {
    let user_id = JSON.parse(this.tokenService.getUser())["id"];
    return this.http.get<any>('http://localhost:8080/api/user/getUserWishList/'+user_id, {
      headers: new HttpHeaders(
        {
          'Authorization': 'Bearer ' + this.tokenService.getToken(),
          'Content-Type': 'application/json'
        }
      )
    });
  }

  addProduct(product: Product, user: User, threshold: number) {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.tokenService.getToken()
      })
    };

    return this.http.post<any>('http://localhost:8080/api/product', {
      id: product.storeId,
      image: product.image,
      name: product.name,
      price: product.priceCurrent,
      link: product.storeLink,
      user_id: JSON.parse(this.tokenService.getUser())["id"],
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
