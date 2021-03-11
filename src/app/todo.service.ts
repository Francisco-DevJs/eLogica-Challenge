import { TodoModel } from './todolist/newtodo.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//fazer import do HttpClient em common http ***Lembrar de importar no app.module***

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos_url = 'http://localhost:3000'
  // criar url da API

  constructor(private http: HttpClient) { }
  // criar essa propriedade estanciada de Http para fazer o service
  getAllTodos() : Observable<any>{
    return this.http.get<any[]>(`${this.todos_url}/todos/`)
  }
  //esse Get é o METODO a ser usado

  getById(id:any) : Observable<any>{
    return this.http.get('http://localhost:3000/todos/'.concat(id))
  }

  createTodo(newTodo: TodoModel) : Observable<any>{
    return this.http.post(`${this.todos_url}/todos/`, newTodo)
  }
  editTodo(id:any, todo:any) : Observable<any>{
    return this.http.put('http://localhost:3000/todos/'.concat(id),  {todo:todo.todo, active:!todo.active });
  }
  deleteTodo(id:any) : Observable<any>{
    return this.http.delete('http://localhost:3000/todos/'.concat(id));
  }


}
