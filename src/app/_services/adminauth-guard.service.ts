import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginComponent } from 'app/components/login/login.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminauthGuard implements CanActivate {

  constructor(
    public router: Router,
    public authService: AuthService,
    private logincomponent: LoginComponent
    
    ) { }
    

    canActivate(
      route: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot): boolean {

        /* if(this.logincomponent.showAdminBoard){
          return true;
        } */
        if(this.authService.showAdminBoard()){
          return true;

        }
        
        this.router.navigate(['/no-access'])
        return false;
      }



}
