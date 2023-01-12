import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { ErrorsComponent } from './core/errors/errors.component';
import { RecentsComponent } from './core/recents/recents.component';
import { SettingsComponent } from './core/settings/settings.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {path: 'errors', component: ErrorsComponent, canActivate: [AuthGuard] },
  {path: 'recents', component: RecentsComponent, canActivate: [AuthGuard] },
  {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
