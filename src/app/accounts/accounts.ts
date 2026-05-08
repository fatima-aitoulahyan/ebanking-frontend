import { Component } from '@angular/core';
import { AsyncPipe, CommonModule, NgForOf, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../services/customer';
import { catchError, Observable, throwError } from 'rxjs';
import { Account } from '../model/account';
import { Operation } from '../model/Operation';
import { RouterOutlet } from '@angular/router';
import { NewOperation } from '../new-operation/new-operation';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-accounts',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NewOperation],
  standalone: true,
  templateUrl: './accounts.html',
  styleUrl: './accounts.css',
})
export class Accounts {
  searchformgroup!: FormGroup;
  account!: Account;
  accountID! : string;
  errorMessage!: string;
  operations!: Array<Operation>;
  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
    public authService : AuthService
  ) {
    this.searchformgroup = this.fb.group({
      accountId: this.fb.control(''),
    });
  }

  handleSearchAccount() {
    this.accountID = this.searchformgroup.value.accountId;
    console.log(this.searchformgroup);
    this.customerService.getAccount(this.accountID).subscribe({
      next: (data) => (this.account = data),
      error: (err) => console.log(err),
    });
    this.customerService.getOperations(this.accountID).subscribe({
      next: (data) => (this.operations = data),
      error: (err) => console.log(err),
    });
  }
}
