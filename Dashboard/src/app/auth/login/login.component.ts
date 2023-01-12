import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: [null, Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
    password: [null, Validators.required]
  });
  hide = true;
  isLoginError: boolean = false;
  isLoading: boolean = false;
  errorMessage : any;
  
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private authService: AuthService, private router: Router) { }

  ngOnInit() {}

  onSubmit() {
    this.isLoading = true;
    this.errorMessage = "";
    this.authService.login(this.loginForm.getRawValue()).subscribe({
        next: (response) => {
          this._snackBar.open('Welcome back', '', {
            duration: 2 * 1000,
          });
          setTimeout(() => {
            this.isLoading = false;
            this.router.navigateByUrl('/settings');
          }, 2000);
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
}