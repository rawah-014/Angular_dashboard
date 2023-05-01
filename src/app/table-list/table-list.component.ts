import { Component, OnInit } from '@angular/core';
import { ProcessService } from '../services/processes/processes.service';
import { Process } from '../services/processes/processes';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
//filter



@Component({
  selector: 'app-user-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
 
})

export class TableListComponent implements OnInit {
 
  processes : Process[] = [];
//pagination
  currentPage = 1;

  //filter
  searchTerm: string;

  constructor(private processService: ProcessService , private router: Router ) { }
  
 

  ngOnInit(): void {
    this.processService.getAllProcess().subscribe((data: Process[]) => {
      this.processes = data;
    });
  }


  getProcess(id: number){
    this.router.navigate(['../typography', id]);
  }

  updateProcess(id: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteProcess(id: number){
    this.processService.deleteProcess(id).subscribe( data => {
       // Display the success alert
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'The process has been deleted successfully.',
    });
      console.log(data);
      this.processService.getAllProcess().subscribe((data: Process[]) => {
        this.processes = data;
       /*  alert('Process with ID ' + id + ' has been deleted successfully.'); */
      });
    })
  }
}




/* 
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
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' } *,
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

} */
