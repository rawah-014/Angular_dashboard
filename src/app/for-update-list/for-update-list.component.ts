import { Component, OnInit } from '@angular/core';
import { ProcessService } from '../services/processes/processes.service';
import { Process } from '../services/processes/processes';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-for-update-list',
  templateUrl: './for-update-list.component.html',
  styleUrls: ['./for-update-list.component.scss']
})
export class ForUpdateListComponent implements OnInit {

  processes : Process[] = [];


  constructor(private processService: ProcessService , private router: Router ) { }
  

  ngOnInit(): void {
    this.processService.getForUpdateProcess().subscribe((data: Process[]) => {
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