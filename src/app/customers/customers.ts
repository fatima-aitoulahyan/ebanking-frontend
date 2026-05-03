import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../services/customer';
import { Customer } from '../model/customer';
import { catchError, map, Observable, throwError } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers implements OnInit {
  customers!: Observable<Array<Customer>>;
  errorMessage!: String;
  searchformgroup!: FormGroup;
  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
  ) {}
  ngOnInit(): void {
    this.searchformgroup = this.fb.group({
      keyword: this.fb.control(''),
    });
    this.customers = this.customerService.getCustomers().pipe(
      catchError((err) => {
        this.errorMessage = err.message;
        return throwError(err);
      }),
    );
  }

  protected handleSearchCustomers() {
    let kw = this.searchformgroup?.value.keyword;
    this.customers = this.customerService.SearchCustomers(kw).pipe(
      catchError((err) => {
        this.errorMessage = err.message;
        return throwError(err);
      }),
    );
  }

  handleDeleteCustomer(c: Customer) {
    let conf = confirm('Are you sure?');
    if (!conf) return;
    this.customerService.deleteCustomer(c.id).subscribe({
      next: (resp) => {
        this.customers = this.customers.pipe(
          map((data) => {
            let index = data.indexOf(c);
            data.slice(index, 1);
            return data;
          }),
        );
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}


