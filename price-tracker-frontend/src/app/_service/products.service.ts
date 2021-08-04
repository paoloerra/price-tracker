import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(query: any, source: any): Observable<any> {
    return this.http.get<any>('https://www.whenitdrop.com/api/products/search', {
      params: {
        query: query,
        source: source,
        page: 1
      }
    });
  }

  addProduct(product: Product, user: User, threshold: Number) {
    return this.http.post<any>('http://localhost:8080/api/test/product', {
      id: product.storeId,
      image: product.image,
      name: product.name,
      price: product.priceCurrent,
      link: product.storeLink,
      user_id: user.id,
      threshold: threshold
    });
  }

}
