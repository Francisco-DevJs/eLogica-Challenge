
import { TodoModel } from './newtodo.model';
import { TodoService } from '../todo.service';
import { Component, OnInit } from '@angular/core';

import { faCheckSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  //essa variavel recebe um array vazio q vai ser preenchido qnd a api carregar
  todos: Array<any> = new Array();
  todoById: any = ''
  newTodo: TodoModel = new TodoModel();

  isEmptyObject(item){
   return (item  && (Object.keys(item).length === 0));
  }
  trash = faTrashAlt;
  check = faCheckSquare
 


  constructor(private todoservice: TodoService) { }

  ngOnInit(){
    this.getAllTodos();
    
  }
  //o metodo criado no todo-api-service deve ser resolvido aqui
  // getAllTodos vai chamar o metodo get() que está em service
  getAllTodos(){
    this.todoservice.getAllTodos()
        .subscribe(data => {
          this.todos = data }, err => {
            console.log(err, 'erro ao no get()')
          }
        );
  }
  getById(id:number){
    this.todoservice.getById(id)
        .subscribe(data => {
          this.todoById = data
        console.log(this.todoById)}, err => {
            console.log(err, 'erro ao no getById()')
          }
        );
  }


  createTodo(){
    if(this.newTodo.todo.valueOf() == '' ){
      return false;
    }
   //chama o service passando um new model
    this.todoservice.createTodo(this.newTodo)
    .subscribe(todo => {
      this.newTodo = new TodoModel(); // seta um novo estado pro NewTodo resetando os fields
      this.getAllTodos(); //da um get pra atualizar a lista
      }, err => {
      console.log(err, 'erro ao Criar o TODO')
     }
   );
  }
  // pegar por id colocar num var

  editTodo(id:number, todo){
    this.todoservice.editTodo( id, todo)
    .subscribe(todo => {
      this.newTodo = new TodoModel(); // seta um novo estado pro NewTodo resetando os fields
      this.getAllTodos(); //da um get pra atualizar a lista
       }, err => {
      console.log(err, 'erro ao Criar o TODO')
     }
    );
  }


  deleteTodo(id:number){
    // this.activeFalls();
    this.todoservice.deleteTodo(id)
     .subscribe(todo => {
      //  window.location.reload();
      
      this.newTodo = new TodoModel(); // seta um novo estado pro NewTodo resetando os fields
      this.getAllTodos(); //da um get pra atualizar a lista

     }, err => {
        console.log(err, 'erro ao Criar o TODO')
       }
     )
  }


}
