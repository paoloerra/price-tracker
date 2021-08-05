import { Component, Input, OnInit, Output } from '@angular/core';
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

  email!: string;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  //Form dati utente
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private tokenStorage: TokenStorageService, private sendPass: ResetPassService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      password: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    });
  }

  //Login
  login() {
    this.spinner.show();
    this.authService.login(this.loginForm.value).subscribe(
      data => {
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

        this.errorMessage = "Login non andato a buon fine, riprova con le giuste credenziali";
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
      this.sendPassword = true;
      this.email = response.message;
      this.spinner.hide();
    }
    const onError = (response: any) => {
      this.spinner.hide();
    }

    this.payLoad.set("username", this.username);
    this.sendPass.resetPass(this.payLoad).subscribe(
      onSuccess, onError
    );
  }



}
