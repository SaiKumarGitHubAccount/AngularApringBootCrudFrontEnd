import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';

const routes: Routes = [
{path:'employees',component:EmployeeListComponent},
{path:'app-create-employee',component:CreateEmployeeComponent},
{path:'app-update-employee/:id',component:UpdateEmployeeComponent},
{path:'app-employee-details/:id',component:EmployeeDetailsComponent},
{path:'',redirectTo:'employees',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
