import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {Todo} from '../../shared/classes/Todo';
import {TodosService} from '../../shared/services/todos.service';

const mockData = [
  new Todo('Learn React', 3),
  new Todo('Learn NodeJs', 3),
  new Todo('Learn Angular', 3),
]

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  const fakeTodoService: jasmine.SpyObj<TodosService> = jasmine.createSpyObj('TodosService', ['fetchTodos'])
  fakeTodoService.fetchTodos.and.returnValue(of(mockData));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      declarations: [ TodosComponent ],
      providers: [
        {provide: TodosService, useValue: fakeTodoService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get todo list', () => {
    expect(component.todoList.length).toBe(3);
    expect(component.todoList[0].title).toBe("Learn React");
  });

  it('should remove item from todo', () => {
    component.removeTodo(component.todoList[0].id);
    expect(component.todoList.length).toBe(2);
    expect(component.todoList[0].title).toBe("Learn NodeJs");
  });

  it('should add todo', () => {
    component.form.get('title').patchValue('Learn Jquery');
    component.addTodo();
    expect(component.todoList.length).toBe(3);
  });
});
