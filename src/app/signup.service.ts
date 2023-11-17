import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private users: any[] = [];

  addUser(user: any) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }

  constructor(private http: HttpClient) {}

  registerUser(username: string, password: string, email: string):Observable<any> {
    console.log(username);
    console.log(password);
    console.log(email);
    const signup_data={
      username:username,
      password:password,
      email:email
    };
    return this.http.post(`http://localhost:3000/signup`,signup_data);
  }
}
