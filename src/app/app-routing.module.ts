import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodosComponent} from './pages/todos/todos.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'todos', pathMatch:'full'},
  {path: 'todos', component: TodosComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
