import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// a importacao do service deve ser feita manualmente e deve ser colocado nos providers

import { HttpClientModule } from '@angular/common/http';
// lembrar de importar esse modulo HTTP pra os services funcionarem e deve ser colocado em imports
import{ FormsModule } from '@angular/forms';

import {TodoService} from './todo.service'

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [ TodoService, HttpClientModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
