import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  userModel1 = new User('Deep', 'dmm7@live.in', 9004096151, 'Angular', true);
  userModel2 = new User('Deep1', 'dmm7@live.in', 9004096152, 'Angular', false);
  userModel3 = new User('Deep2', 'dmm7@live.in', 9004096153, 'Angular', true);
  userModel4 = new User('Deep3', 'dmm7@live.in', 9004096154, 'Angular', false);

  employees = [this.userModel1, this.userModel2, this.userModel3, this.userModel4];
  selectedEmployees = [];

  constructor() { }

  getEmployees() {
    return this.employees;
  }

  getSelectedEmployees() {
    return this.selectedEmployees;
  }

  addEmployeeToCart(index) {
    this.selectedEmployees.push(this.employees[index]);
    alert('Added ' + this.employees[index].name);
    alert('Selected Employees = ' + this.selectedEmployees);
  }

  removeEmployeeFromCart(index) {
    this.selectedEmployees.slice(index, 1);
  }
}
