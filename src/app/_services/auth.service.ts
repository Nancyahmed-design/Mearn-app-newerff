import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../_model/person';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl ='https://mearn-stack-backend-test.herokuapp.com/';


  constructor(private httpClient : HttpClient) { }
  register(person:Person){
 return this.httpClient.post(`${this.baseUrl}user/register`,person);
  }
  login(person:Person){
    return this.httpClient.post(`${this.baseUrl}user/login`,{email:person.email, password:person.password});
     }
}
