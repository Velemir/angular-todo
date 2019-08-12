import { Component, OnInit } from '@angular/core';
import {TodosService} from '../../shared/services/todos.service';
import {ITodo} from '../../shared/models/ITodo';
import {Todo} from '../../shared/classes/Todo';
import {UserService} from '../../shared/services/user.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SharedService} from '../../shared/services/shared.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  form: FormGroup;
  todoList: ITodo[];

  constructor(private todosService: TodosService,
              private userService: UserService,
              private shared: SharedService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.todoList = [];
    this.formConfig();
    this.getTodos();
  }

  addTodo() {
    const title: string = this.form.get('title').value;
    const newTodo: ITodo = new Todo(title, this.userService.userId);
    this.todoList.push(newTodo);
    this.form.get('title').reset();
    this.shared.successNotification('Added new Todo');
  }

  removeTodo(id: number) {
    if(!id || typeof id !== "number") {
      return;
    }

    let todo: ITodo = this.todoList.find( (obj: ITodo) => {
      return obj.id === id;
    });

    let index = this.todoList.indexOf(todo);
    if (index > -1) {
      this.todoList.splice(index, 1);
      this.shared.successNotification(`Removed: ${todo.title}`);
    }
  }

  private getTodos() {
    this.shared.loaderStart();
    this.todosService.fetchTodos().subscribe((res: ITodo[]) => {
      this.shared.loaderStop();
      this.todoList = res;
    }, err => {
      this.shared.loaderStop();
      console.log(err);
    })
  }

  private formConfig() {
    this.form = this.fb.group({
      title: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(1)])
    })
  }
}
