import {fakeAsync, inject, TestBed, tick} from '@angular/core/testing';

import { TodosService } from './todos.service';
import {of} from 'rxjs';
import {Todo} from '../classes/Todo';
import {HttpClient} from '@angular/common/http';
import {ITodo} from '../models/ITodo';

describe('TodosService', () => {
  let todosService: TodosService;

  const httpClientSpy: jasmine.SpyObj<HttpClient> = jasmine.createSpyObj('httpClient', ['get'])
  httpClientSpy.get.and.returnValue(of([new Todo('Learn React', 3)]));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodosService,
        {provide: HttpClient, useValue: httpClientSpy}
      ]
    })
  });

  beforeEach(inject([TodosService], (service: TodosService) => {
    todosService = service;
  }));

  it('should be created', () => {
    expect(todosService).toBeTruthy();
  });

  it('should get todoList using http request and return data', fakeAsync(() => {
    let todos: ITodo[] = [];
    todosService.fetchTodos().subscribe((res: ITodo[]) => {
      todos = res;
    });
    tick();
    expect(httpClientSpy.get).toHaveBeenCalled();
    expect(todos.length).toBe(1);
  }));
});
