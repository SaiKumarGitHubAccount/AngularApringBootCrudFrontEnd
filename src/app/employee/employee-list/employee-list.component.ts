import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  constructor(private employeeservice: EmployeeService,
    private router: Router) { }
  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees() {
    this.employeeservice.getEmployeesList().subscribe(
      data => {
        this.employees = data
      }
    );
  }
  updateEmployee(id: number | undefined) {
    this.router.navigate(['app-update-employee', id]);
  }
  deleteEmployee(id: any) {
    if(confirm('Are you Sure to Delete this Record??'))
    this.employeeservice.deleteEmployeeById(id).subscribe(
      data => {
        alert("Record Deleted SuccessFully!")
        console.log(data)
        this.getEmployees();
      }
    )
  }
  EmployeeDetails(id: number | undefined) {
    this.router.navigate(['app-employee-details', id]);

  }


}
