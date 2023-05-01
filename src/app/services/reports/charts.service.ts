import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chart } from './charts';


const baseUrl = 'http://localhost:8080/api/v1/approved/review';
const apiUpdateUrl = 'http://localhost:8080/api/v1/approved/update';
const apiUpdateApprovedUrl = 'http://localhost:8080/api/v1/approved/updateApprove';
const apiIcApprovedUrl = 'http://localhost:8080/api/v1/approved/ic';
const apiStApprovedUrl = 'http://localhost:8080/api/v1/approved/st';
const apiGmApprovedUrl = 'http://localhost:8080/api/v1/approved/gm';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }

  getReview(): Observable<Chart[]> {
    return this.http.get<Chart[]>(baseUrl);
  }

  getUpdate(): Observable<Chart[]> {
    return this.http.get<Chart[]>(apiUpdateUrl);
  }

  getUpdateApproved(): Observable<Chart[]> {
    return this.http.get<Chart[]>(apiUpdateApprovedUrl);
  }

  getIcApproved(): Observable<Chart[]> {
    return this.http.get<Chart[]>(apiIcApprovedUrl);
  }

  getStApproved(): Observable<Chart[]> {
    return this.http.get<Chart[]>(apiStApprovedUrl);
  }

  getGmApproved(): Observable<Chart[]> {
    return this.http.get<Chart[]>(apiGmApprovedUrl);
  }


  
}


