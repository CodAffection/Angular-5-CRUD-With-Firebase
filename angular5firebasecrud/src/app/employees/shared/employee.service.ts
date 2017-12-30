import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Employee} from './employee.model';
@Injectable()
export class EmployeeService {
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();
  constructor(private firebase :AngularFireDatabase ) { }

  getData(){
    this.employeeList = this.firebase.list('employees');
    return this.employeeList;
  }

  insertEmployee(employee : Employee)
  {
    this.employeeList.push({
      name: employee.name,
      position: employee.position,
      office: employee.office,
      salary: employee.salary
    });
  }

  updateEmployee(employee : Employee){
    this.employeeList.update(employee.$key,
      {
        name: employee.name,
        position: employee.position,
        office: employee.office,
        salary: employee.salary
      });
  }

  deleteEmployee($key : string){
    this.employeeList.remove($key);
  }

}
