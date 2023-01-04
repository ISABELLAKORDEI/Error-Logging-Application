import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
    { path: 'login', component: LoginComponent },
    { path: 'forgot_password', component: ForgotPasswordComponent },
    { path: 'register', component: RegisterComponent },
  
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  