import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/tasks/task.service';
import { Task } from '../services/tasks/task';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  id: number;
  tasks : Task[] = [];

  constructor(private tasksService: TaskService ,  private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.tasksService.getAllTasksByProcessId(this.id).subscribe((data: Task[]) => {
      this.tasks = data;
    });
  }

  deleteTask(taskId: number){
    this.tasksService.deleteTask(taskId).subscribe( data => {
       // Display the success alert
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'The task has been deleted successfully.',
    });
      console.log(data);
      this.tasksService.getAllTasksByProcessId(this.id).subscribe((data: Task[]) => {
        this.tasks = data;
       /*  alert('Process with ID ' + id + ' has been deleted successfully.'); */
      });
    })
  }

}
