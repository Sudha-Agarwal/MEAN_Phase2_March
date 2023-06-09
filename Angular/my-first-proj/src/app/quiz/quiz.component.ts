import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit{
  questions:any[];
  isSubmitted:boolean=false;
  constructor(private ds:DataService){}

  ngOnInit(): void {
    this.ds.getQuiz().subscribe({
      next: data=>this.questions = data
    })

    /*this.ds.getQuiz().subscribe({
      next: data =>console.log(data),
      error: err=> console.log(err),
      complete:()=>console.log('data complete')
    });*/
   
  }

}
