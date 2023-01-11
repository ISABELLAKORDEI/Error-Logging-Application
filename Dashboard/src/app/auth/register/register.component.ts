import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  isRegError: boolean = false;
  isLoading: boolean = false
  errorMessage: any;

  regForm = this.fb.group({
    username: [null, Validators.required],
    email: [null, Validators.required],
    password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
  });

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router,
    private authService: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  submit() {
    this.isLoading = true;
    this.errorMessage = "";
    this.authService.register(this.regForm.getRawValue()).subscribe({
      next: (response) => {
        this._snackBar.open('Your account has been created successfully', '', {
          duration: 2 * 1000,
        });
        setTimeout(() => {
          this.isLoading = false;
          this.router.navigateByUrl('/login');
        }, 2000);
      },
      error: (error: HttpErrorResponse) => {
        if (error.status == 0) {
          this.errorMessage = 'Registration Failed! Please check your internet connection or try again later';
        } else {
          this.errorMessage = 'User with this email address already exists.'
        }
        this.isLoading = false;
        this.isRegError = true;
        throw error;
      }
    });
  }
}