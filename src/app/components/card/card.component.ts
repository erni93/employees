import { Component, Input, OnInit } from '@angular/core';

import { Employee } from 'src/app/api/models/employee';

const VIP_HIRE_DATE_YEAR_LIMIT = 2020;

@Component({
  selector: 'employees-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() employee: Employee;

  public isVIP = false;

  constructor() { }

  ngOnInit(): void {
    this.isVIP = this.employee != null && this.employee.dateOfHire.getFullYear() < VIP_HIRE_DATE_YEAR_LIMIT;
  }

}
