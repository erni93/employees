import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './screens/employee-list/employee-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/employee-list', pathMatch: 'full' },
  { path: 'employee-list', component: EmployeeListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
