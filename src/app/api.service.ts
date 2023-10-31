import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  private jsonFileUrl = 'assets/tasks.json';
  getUsers(): Observable<Task[]> {
    return this.http.get<Task[]>(this.jsonFileUrl);
  }
  // register(formdata: FormData): Observable<any>{
  //   return this.http.post<any>(this.baseUrl, formdata);
  // }
}
