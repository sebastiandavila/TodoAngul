import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  inputValue: any;
  cualquiercosa: Array<String>=[];
  constructor() { }

  ngOnInit(): void {
  }

  sendTodo(){
    
    this.cualquiercosa.push(this.inputValue);
    this.inputValue="";
  }

}
