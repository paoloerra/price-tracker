import { HttpClient, HttpHeaders } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetPassService {

  url : string = "http://localhost:8080/api/auth/resetpassword";

  sub: any;

  constructor(private http: HttpClient) { }

  resetPass(payLoad: Map<string, string>): Observable<Map<string, string>> {
   
    console.log(payLoad);
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };

    let jsonObject: any = {};
    payLoad.forEach((value: string, key: string) => {
      jsonObject[key] = value
    });
    const body = JSON.stringify(jsonObject)
    
    this.sub = this.http.post(this.url, body, requestOptions);
    
    console.log(this.sub);
    
    return this.sub;
  }

  ngOnDestroy() {this.sub.unsubscribe()
    console.log("destroyed");
  }
}
