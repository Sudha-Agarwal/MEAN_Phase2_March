import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-proj!!!!';
  name:string = "Sudha";
  imgSrc = "../assets/download.png";
  isDisabled:boolean = false;


}
