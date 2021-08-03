import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  resetPassword = false; //Visualizza il form per il recupero password
  sendPassword = false; //Visualizza il messaggio di invio password temporanea

  constructor() { }

  ngOnInit(): void {
  }

  //Visualizzazione form login e per il reset password
  showResetPassword() {
    this.resetPassword = !this.resetPassword;
  }

  //Invio password temporanea, e visualizzazione del messaggio
  sendPass() {
    this.sendPassword = true;
  }

}
