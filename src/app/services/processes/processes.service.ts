import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Process } from "./processes";

const baseUrl = "http://localhost:8080/api/v1/process";

@Injectable({
  providedIn: "root",
})
export class ProcessService {
  constructor(private http: HttpClient) {}

  getAllProcess(): Observable<Process[]> {
    return this.http.get<Process[]>(baseUrl);
  }

  getForReviewProcess(): Observable<Process[]> {
    return this.http.get<Process[]>(`${baseUrl}/forReview`);
  }

  getForUpdateProcess(): Observable<Process[]> {
    return this.http.get<Process[]>(`${baseUrl}/forUpdate`);
  }

  getForUpdateApproveProcess(): Observable<Process[]> {
    return this.http.get<Process[]>(`${baseUrl}/forUpdateApprove`);
  }

  getIcApproveProcess(): Observable<Process[]> {
    return this.http.get<Process[]>(`${baseUrl}/IcApprove`);
  }

  getGmApproveProcess(): Observable<Process[]> {
    return this.http.get<Process[]>(`${baseUrl}/GmApprove`);
  }

  getStrategyApproveProcess(): Observable<Process[]> {
    return this.http.get<Process[]>(`${baseUrl}/StrategyApprove`);
  }
  

  getProcess(id: number): Observable<Process> {
    return this.http.get<Process>(`${baseUrl}/${id}`);
  }

  createProcess(formData: FormData): Observable<Process> {
    return this.http.post<Process>(baseUrl, formData);
  }

  updateProcess(id: number, formData: FormData): Observable<Process> {
    return this.http.put<Process>(`${baseUrl}/${id}`, formData);
  }

  deleteProcess(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}

/* @Injectable({
  providedIn: 'root'
})
export class ProcessService {

  private apiUrl = 'http://localhost:8080/api/v1/process';

  constructor(private http: HttpClient) { }

  
  // GET request
  get(endpoint: string): Observable<any> {
    return this.http.get(this.apiUrl + endpoint);
  }

  // POST request
  post(endpoint: string, data: any, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('data', JSON.stringify(data));
    formData.append('image', image);

    return this.http.post(this.apiUrl + endpoint, formData);
  }

  // DELETE request
  delete(endpoint: string): Observable<any> {
    return this.http.delete(this.apiUrl + endpoint);
  }

  // PUT request
  put(endpoint: string, data: any, image: File): Observable<any> {
    const formData = new FormData();
    formData.append('data', JSON.stringify(data));
    formData.append('image', image);

    return this.http.put(this.apiUrl + endpoint, formData);
  }
}
 */
