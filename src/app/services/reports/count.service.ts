import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  private apiReviewUrl = 'http://localhost:8080/api/v1/process/count-all-review';
  private apiUpdateUrl = 'http://localhost:8080/api/v1/process/count-all-update';
  private apiUpdateApprovedUrl = 'http://localhost:8080/api/v1/process/count-all-update-approved';
  private apiIcApprovedUrl = 'http://localhost:8080/api/v1/process/count-all-ic-approved';
  private apiStApprovedUrl = 'http://localhost:8080/api/v1/process/count-all-st-approved';
  private apiGmApprovedUrl = 'http://localhost:8080/api/v1/process/count-all-gm-approved';

  constructor(private http: HttpClient) { }

  getCountReview(): Observable<number> {
    return this.http.get<number>(this.apiReviewUrl);
  }

  getCountUpdate(): Observable<number> {
    return this.http.get<number>(this.apiUpdateUrl);
  }

  getCountUpdateApproved(): Observable<number> {
    return this.http.get<number>(this.apiUpdateApprovedUrl);
  }

  getCountStApproved(): Observable<number> {
    return this.http.get<number>(this.apiStApprovedUrl);
  }

  getCountIcApproved(): Observable<number> {
    return this.http.get<number>(this.apiIcApprovedUrl);
  }

  getCountGmApproved(): Observable<number> {
    return this.http.get<number>(this.apiGmApprovedUrl);
  }

}
