import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-child',
  templateUrl: './course-child.component.html',
  styleUrls: ['./course-child.component.css']
})
export class CourseChildComponent {
  @Input('message') childmessage:string;
  @Output() messageSent = new EventEmitter<string>();

  sendMessage(){
    const messageToParent = "Message from the child";
    this.messageSent.emit(messageToParent);
  }

}
