import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

}
