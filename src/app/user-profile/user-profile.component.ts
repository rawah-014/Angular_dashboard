import { Component, OnInit } from '@angular/core';
import { ProcessService } from '../services/processes/processes.service';
import { Process } from '../services/processes/processes';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  process: Process = new Process();
  constructor(private processService: ProcessService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveProcess(){
    const formData = new FormData();
formData.append('processName', this.process.processName);
formData.append('processDpt', this.process.processDpt);
formData.append('processDptSection', this.process.processDptSection);
formData.append('processOwner', this.process.processOwner);
formData.append('processDescription', this.process.processDescription);
formData.append('processObjective', this.process.processObjective);
formData.append('processInput', this.process.processInput);
formData.append('processOutput', this.process.processOutput);
formData.append('processCustomer', this.process.processCustomer);
formData.append('processKpi', this.process.processKpi);
formData.append('processStrategyStatus', this.process.processStrategyStatus);
 formData.append('processGmStatus', this.process.processGmStatus);
formData.append('processStatus', this.process.processStatus); 
formData.append('image', this.process.image);
this.processService.createProcess(formData).subscribe( data =>{
    // Display the success alert
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'The process has been created successfully.',
    });
  console.log(data);
  this.goToProcessList();
},
error => {
  // Display the error alert
  Swal.fire({
    icon: 'warning',
    title: 'Error!',
    text: error.message,
  });
  console.log(error);
});
}

  goToProcessList(){
    this.router.navigate(['../table-list']);
  }
  
  onSubmit(){
    console.log(this.process);
    this.saveProcess();
  }
}





/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
 */