import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<Student[]> {
    return this.httpClient.get<Student[]>('http://localhost:3000/students');
  }

  create(payload: Student) {
    return this.httpClient.post<Student>(
      'http://localhost:3000/students',
      payload
    );
  }

  getById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`http://localhost:3000/students/${id}`);
  }

  update(payload: Student): Observable<Student> {
    return this.httpClient.put<Student>(
      `http://localhost:3000/students/${payload.id}`,
      payload
    );
  }

  delete(id: number) {
    return this.httpClient.delete(`http://localhost:3000/students/${id}`);
  }
}
