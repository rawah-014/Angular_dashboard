import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/tasks/task.service';
import { Task } from '../services/tasks/task';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

declare const google: any;

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  tasks : Task[] = []; 

    id: number;
  constructor(private _fb: FormBuilder , private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router) { }
  public addmore: FormGroup;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
  	this.addmore = this._fb.group({
  	  title:[''],
  	  type:[''],
  	  taskWla:[''],
      itemRows: this._fb.array([this.initItemRows()])
    });
    this.id = this.route.snapshot.params['id'];
  }
// create Task function 
saveTask() {
  const formValue = this.addmore.value;
  const itemRows = formValue.itemRows;

  // create an array of objects to send as JSON
  const tasks = itemRows.map(row => {
    return {
      taskName: row.taskName,
      taskDescription: row.taskDescription,
      taskWla: row.taskWla,
      taskOwner: row.taskOwner
    };
  });

  this.taskService.createTask(this.id, tasks).subscribe(data => {
    console.log(data);
    this.goToProcessList();
  },
  error => console.log(error));
}


  get formArr() {
    return this.addmore.get('itemRows') as FormArray;
  }

  initItemRows() {
    return this._fb.group({
    taskName:[''],
    taskDescription:[''],
    taskWla:[''],
    taskOwner:[''], 
    });
  }
  addNewRow() {
    this.formArr.push(this.initItemRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }

  goToProcessList(){
    this.router.navigate(['../table-list']);
  }

   onSubmit() {
    const formValue = this.addmore.value;
    const itemRows = formValue.itemRows;

    // create an array of objects to send as JSON
    const tasks = itemRows.map(row => {
      return {
        taskName: row.taskName,
        taskDescription: row.taskDescription,
        taskWla: row.taskWla,
        taskOwner: row.taskOwner
      };
    }); 
    this.saveTask();

}
}
