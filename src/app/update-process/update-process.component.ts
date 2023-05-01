import { Component, OnInit } from '@angular/core';
import { ProcessService } from '../services/processes/processes.service';
import { Process } from '../services/processes/processes';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-process',
  templateUrl: './update-process.component.html',
  styleUrls: ['./update-process.component.scss']
})
export class UpdateProcessComponent implements OnInit {

  id: number;
  process: Process = new Process();
  constructor(private processService: ProcessService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.processService.getProcess(this.id).subscribe(data => {
      this.process = data;
    }, error => console.log(error));
  }

  updateProcessById(){
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
this.processService.updateProcess(this.id,formData).subscribe( data =>{
    // Display the success alert
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'The process has been updated successfully.',
    });
  console.log(data);
  this.goToProcessList();
},
error => 
console.log(error));

  }

  goToProcessList(){
    this.router.navigate(['../table-list']);
  }
  
  onSubmit(){
    console.log(this.process);
    this.updateProcessById();
  }
}
