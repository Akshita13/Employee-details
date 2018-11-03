import { Injectable } from '@angular/core';
import { employeedatastructure } from '../employee-data-structure.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CoreService {

  private employeeDataURL = 'api/employeeData';  // URL to web api
  public designation: string[] = [];

  //for get and add the data we use http
  constructor(private http: HttpClient) {

    //designation field has dropdown so we passed data here
    this.designation = ["employee", "trainee", "associate-tranee", "manager", "HR"];

  }

  getdesignationdata() {
    return this.designation;
  }

  getdata(): Observable<employeedatastructure[]> {

    return this.http.get<employeedatastructure[]>(this.employeeDataURL);
  }

  public adddata(data): Observable<employeedatastructure> {
    
    return this.http.post<employeedatastructure>(this.employeeDataURL, data);
  }
}