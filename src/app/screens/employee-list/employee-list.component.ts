import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

import { ApiService } from 'src/app/api/api.service';
import { Employee } from 'src/app/api/models/employee';

const ALL_DEPARTMENTS = "All Departments";

@Component({
  selector: 'employees-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  public employees: Employee[];
  public departments: string[];

  public ALL_DEPARTMENTS = ALL_DEPARTMENTS;

  private backupEmployees: Employee[];

  public constructor(
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.retrieveEmployees();
    this.retrieveDepartments();
  }

  private retrieveEmployees(): void {
    this.apiService.getEmployees()
    .pipe(
      map(employees => {
        employees.sort((a, b) => a.dateOfHire.getTime() < b.dateOfHire.getTime() ? 1 : -1);
        return employees;
      }),
    ).subscribe(employees => {
      this.backupEmployees = employees;
      this.employees = employees;
    });
  }

  private retrieveDepartments(): void {
    this.apiService.getDepartments().subscribe(departments => this.departments = departments);
  }

  public filterByDepartment(department: string) {
    if (department !== ALL_DEPARTMENTS) {
      this.employees = this.backupEmployees.filter(employee => employee.department === department);
    } else {
      this.employees = this.backupEmployees;
    }
  }
}
