import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../services/customer';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers implements OnInit {
  customers!: Observable<Array<Customer>>;
  errorMessage!: String;
  constructor(private customerService: CustomerService) {}
  ngOnInit(): void {
    this.customers = this.customerService.getCustomers();
  }
}


