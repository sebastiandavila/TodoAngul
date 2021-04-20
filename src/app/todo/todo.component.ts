import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  inputValue: any;
  idgenerate:number;
  todos: Array<String>=[];
  checkedAll:Boolean=false;
  constructor() { this.idgenerate=1;
    
  }

  ngOnInit(): void {
  }

  sendTodo(){
    if(this.inputValue.trim()!==""){

      this.todos.push(this.inputValue);
      this.inputValue="";
    }
    else{alert("Ingrese un valor valido")}
  }
  deleteTodo(todo:any){
  
  this.todos = this.todos.filter(tod => tod!=todo)
  }
  seleccionartodo(){
    this.checkedAll=!this.checkedAll;
  }

}
