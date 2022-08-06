import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ]
})
export class ScreensModule { }
