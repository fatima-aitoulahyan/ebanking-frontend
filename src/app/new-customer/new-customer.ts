import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Customers } from '../customers/customers';
import { CustomerService } from '../services/customer';

@Component({
  selector: 'app-new-customer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-customer.html',
  styleUrl: './new-customer.css',
})
export class NewCustomer {
  newCustomerGroup!: FormGroup;
  constructor(private fb: FormBuilder , private customersService : CustomerService) {
    this.newCustomerGroup = this.fb.group({
      name: this.fb.control(null, [Validators.required, Validators.minLength(4)]),
      email: this.fb.control(null , Validators.email),
    });
  }

   handleSaveCustomer() {
    let customer = this.newCustomerGroup.value;
    this.customersService.saveCustomer(customer).subscribe({
      next : data=>{
        alert("customer has been  saved ")
      },
      error : err =>{
        console.log(err);
      }
    });
  }
}
