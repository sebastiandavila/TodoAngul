import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  inputValue: any;
  todos: Array<String>=[];
  constructor() { }

  ngOnInit(): void {
  }

  sendTodo(){
    
    
    if(this.inputValue.trim()!==""){
      this.todos.push(this.inputValue);
      this.inputValue="";
    }
    else{alert("Ingrese un valor valido")}
  }

}
