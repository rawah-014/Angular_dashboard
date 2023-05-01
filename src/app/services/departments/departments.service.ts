import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from './Departments';


const baseUrl = 'http://localhost:8080/api/v1/departments';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Department[]> {
    return this.http.get<Department[]>(baseUrl);
  }

  //single department
  get(id: number): Observable<Department> {
    return this.http.get<Department>(`${baseUrl}/${id}`);
  }

  create(data: Department): Observable<Department> {
    return this.http.post<Department>(baseUrl, data);
  }

  update(id: number, data: Department): Observable<Department> {
    return this.http.put<Department>(`${baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}


