import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITodo} from '../models/ITodo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpClient: HttpClient) { }

  fetchTodos(): Observable<any> {
    return this.httpClient.get<ITodo[]>('http://jsonplaceholder.typicode.com/todos');
  }
}
