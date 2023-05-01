/* import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../services/departments/departments.service';
import { Department } from '../services/departments/departments';

@Component({
  selector: 'app-user-list',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class UserListComponent implements OnInit {
  departments : Department[] = [];

  constructor(private departmentsService: DepartmentService) { }

  ngOnInit(): void {
    this.departmentsService.getAll().subscribe((data: Department[]) => {
      this.departments = data;
    });
  }
} */


/* 
 import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsComponent } from './departments.component';

describe('DepartmentsComponent', () => {
  let component: DepartmentsComponent;
  let fixture: ComponentFixture<DepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); 
 */