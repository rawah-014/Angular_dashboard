import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../services/departments/departments.service';
import { Department } from '../services/departments/departments';

@Component({
  selector: 'app-user-list',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  departments : Department[] = [];

  constructor(private departmentsService: DepartmentService) { }

  ngOnInit(): void {
    this.departmentsService.getAll().subscribe((data: Department[]) => {
      this.departments = data;
    });
  }
}