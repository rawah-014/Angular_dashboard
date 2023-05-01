import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../Flowchart/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { ModifyTaskComponent } from 'app/modify-task/modify-task.component';
import { DepartmentsComponent } from 'app/departments/departments.component';
import { AuthGuard } from 'app/_services/auth-guard.service';
import { AdminauthGuard } from 'app/_services/adminauth-guard.service';
import { LoginComponent } from 'app/components/login/login.component';
import { ProcessDetailsComponent } from 'app/process-details/process-details.component';
import { UpdateProcessComponent } from 'app/update-process/update-process.component';
import { CreateTaskComponent } from 'app/create-task/create-task.component';
import { TasksListComponent } from 'app/tasks-list/tasks-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReviewListComponent } from 'app/review-list/review-list.component';
import { ForUpdateListComponent } from 'app/for-update-list/for-update-list.component';
import { UpdateApproveListComponent } from 'app/update-approve-list/update-approve-list.component';
import { IcApproveListComponent } from 'app/ic-approve-list/ic-approve-list.component';
import { StrategyApproveListComponent } from 'app/strategy-approve-list/strategy-approve-list.component';
import { GmApproveListComponent } from 'app/gm-approve-list/gm-approve-list.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from 'app/filter.pipe';


/* import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from '../../login/login.component';
import { RegisterComponent } from '../../register/register.component';
import { HomeComponent } from '../../home/home.component';

import { BoardAdminComponent } from '../../board-admin/board-admin.component';
import { BoardModeratorComponent } from '../../board-moderator/board-moderator.component';
import { BoardUserComponent } from '../../board-user/board-user.component';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'app/app.routing';
 */

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NgxPaginationModule
   /*  NgxDatatableModule */
  /*   BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule */
  ],
  providers: [AuthGuard, AdminauthGuard, LoginComponent],

  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    FilterPipe,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ModifyTaskComponent,
    DepartmentsComponent,
    ProcessDetailsComponent,
    UpdateProcessComponent,
    CreateTaskComponent ,
    TasksListComponent,
    ReviewListComponent ,
    ForUpdateListComponent,
    UpdateApproveListComponent,
    IcApproveListComponent,
    StrategyApproveListComponent,
    GmApproveListComponent,
  ]
})

export class AdminLayoutModule {}
