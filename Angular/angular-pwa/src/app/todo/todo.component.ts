import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  TodoItems!:any[];

  constructor(private todoService:TodoService){}
  ngOnInit(): void {
   
    this.todoService.getTodoList().subscribe({
      next: data=>this.TodoItems = data
    })
  }



}
