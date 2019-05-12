import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Psy } from './modelPsy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceHttpService {

  constructor(private http: HttpClient) {}

  getPsy(): Observable<Array<Psy>> {
    return this.http.get<Array<Psy>>('http://localhost:8301/rest/user/getall');
  }
}
