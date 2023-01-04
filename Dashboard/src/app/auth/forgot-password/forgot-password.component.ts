import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassForm = this.fb.group({
    email: [null, Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
  });
  hide = true;
  isFormError: boolean = false;
  isLoading: boolean = false;
  errorMessage : any;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  setStatus(status: boolean) {
    this.isLoading = status
  }

  onSubmit() {
    this.setStatus(true);
    this.errorMessage = "";
    // this.authService.login(this.loginForm.getRawValue()).subscribe({
    //   next: (response) => {
    //     this.setStatus(false);
    //     this.router.navigateByUrl('/home');
    //   },
    //   error: (error: HttpErrorResponse) => {
    //     if(error.error['detail'] == undefined){
    //       this.errorMessage = 'Login Failed! Please check your internet connection or try again later';
    //     }else{
    //       this.errorMessage = error.error['detail'];
    //     }
    //     this.setStatus(false);
    //     this.isLoginError = true;
    //     throw error;
    //   }});
  }
}