import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/api/api.service';
import { Employee } from 'src/app/api/models/employee';

@Component({
  selector: 'employees-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public employees: Employee[];
  public departments: string[];

  public constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.retrieveEmployeesData();
  }

  private retrieveEmployeesData(): void {
    this.apiService.getEmployees().subscribe(employees => this.employees = employees);
    this.apiService.getDepartments().subscribe(departments => this.departments = departments);
  }
}
