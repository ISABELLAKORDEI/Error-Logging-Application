import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, shareReplay, BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/auth.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Error Logger';

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed
  }

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
      //  get user profile
      this.isLoggedIn$ = this.authService.isLoggedIn;
    } else {
      this.isLoggedIn$ = new BehaviorSubject<boolean>(false);
      this.router.navigateByUrl('/login');
    }
  }

  onLogout() {
    this.authService.logout();
  }

}
