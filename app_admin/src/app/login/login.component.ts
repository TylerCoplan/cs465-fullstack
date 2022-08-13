import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public formError: string = '';
  public credentials = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() { }
  public onLoginSubmit(): void {
    this.formError = '';
    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'All fields are required, please try again';
      alert('All fields are required, please try again');
    } else {
      this.doLogin();
      console.log(this.formError)
    }
  }

  private doLogin(): void {
    console.log("I WAS CALLED!!!")
    this.authenticationService.login(this.credentials)
      .then(() => this.router.navigateByUrl('list-trips'))
      .catch((message) => this.formError = message);
  }
}