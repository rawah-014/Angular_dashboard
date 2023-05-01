import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthGuard } from './_services/auth-guard.service';

import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { AdminauthGuard } from './_services/adminauth-guard.service';





@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule


    

  ],


  declarations: [
    AppComponent,
    AdminLayoutComponent,
  

    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    NoAccessComponent,
  
   
   
   
   


  ],
  providers: [authInterceptorProviders, AuthGuard, AdminauthGuard, LoginComponent],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
