import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: [null, Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
    password: [null, Validators.required]
  });
  hide = true;
  isLoginError: boolean = false;
  isLoading: boolean = false;
  errorMessage : any;
  
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {

  }

  onSubmit() {
    this.isLoading = true;
    this.errorMessage = "";
    this.authService.login(this.loginForm.getRawValue()).subscribe({
        next: (response) => {
            this.isLoading = false;
            this.router.navigateByUrl('/home');
        },
      error: (error: HttpErrorResponse) => {
        if(error.status == 0){
          this.errorMessage = 'Login Failed! Please check your internet connection or try again later';
        }else{
          this.errorMessage = "Invalid Credentials or User doesn't exist";
        }
        this.isLoading = false;
        this.isLoginError = true;
        throw error;
      }});
  }

  gotoForgot(){
    this.router.navigateByUrl('/forgot_password');
  }
}