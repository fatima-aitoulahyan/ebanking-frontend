import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as http from 'node:http';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';
import { environment } from '../environments/environment';
import { Customers } from '../customers/customers';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  backendHost: string = 'http://localhost:8085';
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
    return this.http.delete(environment.backendHost + '/customer/'+id);
  }
}
