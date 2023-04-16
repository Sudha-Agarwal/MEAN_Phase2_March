import { Component, ElementRef, ViewChild } from '@angular/core';
import { CourseChildComponent } from '../course-child/course-child.component';

@Component({
  selector: 'app-course-parent',
  templateUrl: './course-parent.component.html',
  styleUrls: ['./course-parent.component.css'],
  
})
export class CourseParentComponent {
  childMessage:string = "message from parent!!";
  @ViewChild('CourseChildComponent', {static:false}) CourseChildComponent:CourseChildComponent;

  course = [
    {id:1, courseName:"Angular"},
    {id:2, courseName:"Java"},
    {id:3, courseName:"Node.js"}
  ];

  onMessageReceived(message:string){
    console.log("received from child " + message);
  }

  onClick(){
    this.CourseChildComponent.doSomething();
  }

}
