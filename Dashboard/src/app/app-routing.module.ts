import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { ErrorsComponent } from './core/errors/errors.component';
import { RecentsComponent } from './core/recents/recents.component';
import { SettingsComponent } from './core/settings/settings.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent },
  {path: 'errors', component: ErrorsComponent },
  {path: 'recents', component: RecentsComponent },
  {path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }