import { Component, Input, OnInit } from '@angular/core';

import { Employee } from 'src/app/api/models/employee';
import { Badge, BadgeCssClass, MARRIED_BADGE, VIP_BADGE } from './models/badge';

const VIP_HIRE_DATE_YEAR_LIMIT = 2020;

@Component({
  selector: 'employees-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() employee: Employee;

  public badges: Badge[] = [];

  ngOnInit(): void {
    this.loadBadges();
  }

  public loadBadges(): void {
    this.badges.push({
      text: this.employee.department,
      class: BadgeCssClass.DEFAULT,
    });
    if (this.employee.married) {
      this.badges.push(MARRIED_BADGE);
    }
    if (this.employee.dateOfHire.getFullYear() < VIP_HIRE_DATE_YEAR_LIMIT) {
      this.badges.push(VIP_BADGE);
    }
  }

}
