import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  //Logout
  signOut() {
    window.sessionStorage.clear();
  }

  //Salvo i token in sessione
  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  //Ritorno token dalla sessione
  public getToken(): any {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  //Salva l'utente in sessione
  public saveUser(user: any) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  //Recupero utente dalla sessione
  public getUser() : any {
    return sessionStorage.getItem(USER_KEY);
  }

}
