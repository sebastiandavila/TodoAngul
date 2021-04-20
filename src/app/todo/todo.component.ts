import { Component, OnInit } from '@angular/core';
import {  TodoItem } from "./TodoItem";
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  inputValue: any;
  idgenerate:number;
  todos: Array<TodoItem>=[];
  checkedAll:Boolean=false;
  
  constructor() { this.idgenerate=1;
    
  }

  ngOnInit(): void {
  }

  sendTodo(){
    if(this.inputValue.trim()!==""){
    
      this.todos.push(new TodoItem(this.inputValue, false));
      this.inputValue="";
    }
    else{alert("Ingrese un valor valido")}
  }
  deleteTodo(todo:any){
  
  this.todos = this.todos.filter(tod => tod!=todo)
  
  }
  seleccionartodo(){
    this.todos.forEach(todo => todo.ChangeDoneAll(this.checkedAll))
    this.checkedAll = !this.checkedAll;
  }

  changeDone(todo:TodoItem)
  {
    todo.ChangeDone();
  }
  deleteTodosDone(){
    this.todos = this.todos.filter(tod => tod.done!=true)
  }

}
