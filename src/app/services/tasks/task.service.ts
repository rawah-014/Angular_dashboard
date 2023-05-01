import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';


const baseUrl = 'http://localhost:8080/api/v1';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(baseUrl);
  }

  //get by process id
  getAllTasksByProcessId(processId: number): Observable<Task[]> {
    const url = `${baseUrl}/process/${processId}/tasks`;
    return this.http.get<Task[]>(url);
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${baseUrl}/tasks/${id}`);
  }


  createTask(processId: number, task: Task[]): Observable<Task[]> {
    const url = `${baseUrl}/process/${processId}/tasks`;
    return this.http.post<Task[]>(url, task);
  }

  updateTask(id: number, data: Task): Observable<Task> {
    return this.http.put<Task>(`${baseUrl}/tasks/${id}`, data);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/tasks/${id}`);
  }
}


