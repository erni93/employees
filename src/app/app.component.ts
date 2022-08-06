import { Component } from '@angular/core';
import { ApiService } from './api/api.service';

@Component({
  selector: 'employees-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public constructor(public apiService: ApiService) {}

  public test1() {
    this.apiService.getDepartments().subscribe(data => console.log(data));
  }
  public test2() {
    this.apiService.getEmployees().subscribe(data => console.log(data));
  }
}
