import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  resetPassword = false;
  sendPassword = false;

  constructor() { }

  ngOnInit(): void {
  }

  showResetPassword() {
    this.resetPassword = !this.resetPassword;
  }

  sendPass() {
    this.sendPassword = true;
  }

  showLogin() {
    this.resetPassword = false;
    this.sendPassword = true;
  }
}
