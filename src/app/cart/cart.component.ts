import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  selectedEmployees = [];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.selectedEmployees = this._employeeService.getSelectedEmployees();
    alert('Selected Emp = ' + this.selectedEmployees);
  }

  remove(index) {
    this._employeeService.removeEmployeeFromCart(index);
    this.selectedEmployees = this._employeeService.getSelectedEmployees();
  }

}
