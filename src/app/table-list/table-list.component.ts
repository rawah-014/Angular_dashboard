import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'table-list',  icon: 'settings', class: '' },
    { path: '/user-profile', title: 'Create Process',  icon:'library_books', class: '' },
    { path: '/table-list', title: 'Processes',  icon:'content_paste', class: '' },
     { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
     { path: '/upgrade', title: 'table-list',  icon:'unarchive', class: 'active-pro' }, /*
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' } */,
];

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
