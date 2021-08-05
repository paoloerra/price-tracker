import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_service/auth.service';
import { TokenStorageService } from 'src/app/_service/token-storage.service';
import { ResetPassService } from 'src/app/_service/reset-pass.service';
import { NgxSpinnerService } from 'ngx-spinner';

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

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  //Form dati utente
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private tokenStorage: TokenStorageService, private sendPass: ResetPassService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      password: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    });
  }

  //Login
  login() {
    this.spinner.show();
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(
      data => {
        
        //console.log(data.accessToken);
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        //this.roles = this.tokenStorage.getUser().roles;
        this.spinner.hide();
        this.reloadPage();
      },
      err => {

        this.spinner.hide();

        this.errorMessage = "Login non andato a buon fine";
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    this.spinner.show();
    window.location.reload();
    
  }

  //Visualizzazione form login e per il reset password
  showResetPassword() {
    this.resetPassword = !this.resetPassword;
  }

  

  //Invio password temporanea, e visualizzazione del messaggio
  send() {
    this.spinner.show();
    const onSuccess = (response: any) => {
      console.log("Succesfully sent", response);
      this.sendPassword =  true;
      console.log(response.message);
      this.email = response.message;
      this.spinner.hide();
    } 
    const onError = (response: any) => {
      console.log("Errore", response);
      this.spinner.hide();
    }

    this.payLoad.set("username", this.username);
    this.sendPass.resetPass(this.payLoad).subscribe(
      onSuccess, onError
    );
  }



}
