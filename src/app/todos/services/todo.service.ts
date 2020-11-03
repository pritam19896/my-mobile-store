import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Todo } from '../models/todo';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      catchError(this.handleError)
    );
  }

  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  createTodo(userId: number, title: string, body: string): Observable<Todo> {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/posts', {
      'userId': userId,
      'title': title,
      'body': body
    })
    .pipe(
      catchError(this.handleError)
    );
  }

  updateTodo(id: number, userId: number, title: string, body: string): Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      id,
      userId,
      title,
      body
    })
    .pipe(
      catchError(this.handleError)
    );
  }

  deleteTodo(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client side error
      errorMessage = 'Client side error -> ' + error.error;
    } else {
      // server side error
      errorMessage = `Status: ${error.status}, body: ${error.error}`;
    }
    return throwError(errorMessage);
  }
}
