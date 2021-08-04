import { Component, OnInit } from '@angular/core';
import { ResetPassService } from 'src/app/_service/reset-pass.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  resetPassword = false; //Visualizza il form per il recupero password
  sendPassword = false; //Visualizza il messaggio di invio password temporanea
  
  username!: String;

  payLoad = new Map();
  
  email! : string;

  constructor(private sendPass: ResetPassService) { }

  ngOnInit(): void {
  }

  //Visualizzazione form login e per il reset password
  showResetPassword() {
    this.resetPassword = !this.resetPassword;
  }

  

  //Invio password temporanea, e visualizzazione del messaggio
  send() {
    const onSuccess = (response: any) => {
      console.log("Succesfully sent", response);
      this.sendPassword =  true;
      console.log(response.message);
      this.email = response.message;
    } 
    const onError = (response: any) => {
      console.log("Errore", response);
    }

    this.payLoad.set("username", this.username);
    this.sendPass.resetPass(this.payLoad).subscribe(
      onSuccess, onError
    );
  }



}
