import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as http from 'node:http';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';
import { environment } from '../environments/environment';
import { Customers } from '../customers/customers';
import { FormControl } from '@angular/forms';
import { Account } from '../model/account';
import { Operation } from '../model/Operation';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}
  public getCustomers(): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(environment.backendHost + '/customers');
  }
  public SearchCustomers(keyword: String): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(
      environment.backendHost + '/customers/search?keyword=' + keyword,
    );
  }
  public saveCustomer(customer: Customers): Observable<Customer> {
    return this.http.post<Customer>(environment.backendHost + '/customers', customer);
  }
  public deleteCustomer(id: number) {
    return this.http.delete(environment.backendHost + '/customer/' + id);
  }

  public getAccount(accountID: String): Observable<Account> {
    return this.http.get<Account>(environment.backendHost + '/accounts/' + accountID);
  }

  public getOperations(accountID: String): Observable<Array<Operation>> {
    return this.http.get<Array<Operation>>(
      environment.backendHost + '/accounts/' + accountID + '/operations',
    );
  }

  public saveOperation(operation: Operation):Observable<Operation> {
    console.log('test', operation);
    return this.http.post<Operation>(environment.backendHost + '/accounts/saveOperation', operation);

  }
}
