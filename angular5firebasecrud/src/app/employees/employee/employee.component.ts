import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { EmployeeService } from '../shared/employee.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private tostr: ToastrService) { }

  ngOnInit() {

    this.resetForm();
  }

  onSubmit(employeeForm: NgForm) {
    if (employeeForm.value.$key == null)
      this.employeeService.insertEmployee(employeeForm.value);
    else
      this.employeeService.updateEmployee(employeeForm.value);
    this.resetForm(employeeForm);
    this.tostr.success('Submitted Succcessfully', 'Employee Register');
  }

  resetForm(employeeForm?: NgForm) {
    if (employeeForm != null)
      employeeForm.reset();
    this.employeeService.selectedEmployee = {
      $key: null,
      name: '',
      position: '',
      office: '',
      salary: 0,
    }
  }

}
