import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginComponent } from 'app/components/login/login.component';
import { TokenStorageService } from './token-storage.service';
import { AuthInterceptor } from 'app/_helpers/auth.interceptor'; 
import { Observable } from 'rxjs';

@Injectable( {providedIn: 'root'})
export class AuthGuard implements CanActivate {


  

  constructor(
    public router: Router,
    public authService: AuthService,
    ) { }

    canActivate(
      route: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot): boolean {
        if( !this.authService.isLoggedIn()){
          this.router.navigate(['login']);
          return false;
        }
        return this.authService.isLoggedIn();
      }
}


