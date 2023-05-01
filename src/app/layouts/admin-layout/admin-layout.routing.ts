import { Routes } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../Flowchart/upgrade.component';
import { ModifyTaskComponent } from 'app/modify-task/modify-task.component';
import { DepartmentsComponent } from 'app/departments/departments.component';
import { ProfileComponent } from 'app/profile/profile.component';
import { AuthGuard } from 'app/_services/auth-guard.service';
import { AdminauthGuard } from 'app/_services/adminauth-guard.service';
import { ProcessDetailsComponent } from 'app/process-details/process-details.component';
import { UpdateProcessComponent } from 'app/update-process/update-process.component';
import { CreateTaskComponent } from 'app/create-task/create-task.component';
import { TasksListComponent } from 'app/tasks-list/tasks-list.component';
import { ReviewListComponent } from 'app/review-list/review-list.component';
import { ForUpdateListComponent } from 'app/for-update-list/for-update-list.component';
import { UpdateApproveListComponent } from 'app/update-approve-list/update-approve-list.component';
import { IcApproveListComponent } from 'app/ic-approve-list/ic-approve-list.component';
import { StrategyApproveListComponent } from 'app/strategy-approve-list/strategy-approve-list.component';
import { GmApproveListComponent } from 'app/gm-approve-list/gm-approve-list.component';




export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }

    { path: 'profile',        component: ProfileComponent },
    { path: 'dashboard',      component: DashboardComponent, canActivate:[AdminauthGuard] },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography/:id',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent, canActivate:[AdminauthGuard] },
    { path: 'tasks/modify-task/:id',    component: ModifyTaskComponent },
    { path: 'departments',    component: DepartmentsComponent },
    { path: 'process-details/:id',    component: ProcessDetailsComponent },//UpdateProcessComponent
    { path: 'update-process/:id',    component: UpdateProcessComponent },
  //  { path: 'update-process/:id',    component: CreateTaskComponent },//TasksListComponent
    { path: 'create-tasks/:id',    component: CreateTaskComponent },
    { path: 'tasks/:id',    component: TasksListComponent },
    { path: 'review-list',     component: ReviewListComponent },
    { path: 'for-update-list',     component: ForUpdateListComponent },
    { path: 'update-approve-list',     component: UpdateApproveListComponent },
    { path: 'ic-approved-list',     component: IcApproveListComponent },
    { path: 'strategy-approved-list',     component: StrategyApproveListComponent },
    { path: 'gm-approved-list',     component: GmApproveListComponent },
    { path: '**', redirectTo: 'login' }

    
];
