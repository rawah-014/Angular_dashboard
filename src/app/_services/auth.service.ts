import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = 'http://localhost:8080/api/auth/';
const TOKEN_KEY = 'auth-token';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   public currentUser: string[] = [];
   public user: string[];
  [x: string]: any;
  public roles: string[] = [];
 


  constructor(public http: HttpClient, public tokenStorageService: TokenStorageService) { }
 
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);

  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  
  isLoggedIn(){
    
    return this.tokenStorageService.getToken()!=null;

  }

  showAdminBoard(){
    
    const user = this.tokenStorageService.getUser();
    this.roles = user.roles; 
    
   return this.roles.includes('ROLE_ADMIN') || this.roles.includes('ROLE_STRATEGY');
  }


}
