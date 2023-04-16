import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
  private url= 'http://localhost:5000/fresh-todo-list';
  private url1 = "https://jsonplaceholder.typicode.com/todos"

  getTodoList(){
    return this.http.get<any[]>(this.url1);
  }
}
