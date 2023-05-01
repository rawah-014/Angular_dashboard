import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/tasks/task.service';
import { Task } from '../services/tasks/task';
import { ActivatedRoute , Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-profile',
  templateUrl: './modify-task.component.html',
  styleUrls: ['./modify-task.component.css']
})
export class ModifyTaskComponent implements OnInit {

  id: number;
  task: Task;

  constructor(private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.taskService.getTask(this.id).subscribe(data => {
      this.task = data;
    });
  }

  onSubmit(){
    this.taskService.updateTask(this.id, this.task).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/table-list']);
  }
}
