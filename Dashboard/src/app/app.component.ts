import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable, map, shareReplay, BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Error Log Application';
  name: string = '';
  role: string = '';

  isLoggedIn$!: Observable<boolean>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    var loggedIn$ = this.authService.isLoggedIn;
    if (loggedIn$) {
      var user = this.authService.getUser();
      // this.authService.getUser().subscribe({
      //   next: (response) => {
      //     var user = response.body;
          this.name = user['first_name'] + ' ' + user['last_name'];
          this.role = user['role']
          this.isLoggedIn$ = this.authService.isLoggedIn;
      //   },
      //   error: (error: HttpErrorResponse) => {
      //     throw error;
      //   }
      // });
    } else {
      this.isLoggedIn$ = new BehaviorSubject<boolean>(false);
      this.router.navigateByUrl('/login');
    }
  }

  @ViewChild(MatSidenav) drawer!: MatSidenav;
  toggleDrawer() {
    this.drawer.toggle();
  }

  onLogout() {
    this.authService.logout();
  }

}
