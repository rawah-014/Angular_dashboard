import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_services/auth-guard.service';
import { NoAccessComponent } from './no-access/no-access.component';




const routes: Routes =[

    {
    path: '', redirectTo: 'login', pathMatch: 'full',},

    { path: 'login',    component: LoginComponent },
    
    { path: 'register',    component: RegisterComponent },
    { path: 'no-access',    component: NoAccessComponent},
    
    
    
    {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '', canActivate:[AuthGuard],
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  } 
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
       
  })
  ],
  exports: [ RouterModule
  ],
})
export class AppRoutingModule { }
