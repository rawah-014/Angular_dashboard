import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminauthGuard } from 'app/_services/adminauth-guard.service';
import { AuthGuard } from 'app/_services/auth-guard.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
   
    NavbarComponent,
    SidebarComponent
  ],
  exports: [
    
    NavbarComponent,
    SidebarComponent
  ],
  providers: [AdminauthGuard, AuthGuard, LoginComponent]
})
export class ComponentsModule { }
