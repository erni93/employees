import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './models/employee';
import { map, Observable } from 'rxjs';

const ENDPOINTS = {
  EMPLOYEES: '/api/v2/employees',
  DEPARTMENTS: '/api/v2/departments',
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(ENDPOINTS.EMPLOYEES)
      .pipe(
        map(employees => {
          employees.forEach(employee => {
            employee.dateOfBirth = new Date(employee.dateOfBirth);
            employee.dateOfHire = new Date(employee.dateOfHire);
            employee.avatar = employee.avatar.replace("ap1", "api")
          });
          return employees;
        }),
      );
  }

  public getDepartments(): Observable<string[]> {
    return this.http.get<string[]>(ENDPOINTS.DEPARTMENTS);
  }

}
