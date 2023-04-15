import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent {
  //isValid:boolean = true;
  isVisible:boolean = true;
  email1:any;
  //user = {email:'',password:''};

  user = { email: '', password: '' };
  isValid = true;

  constructor(private ds:DataService){}

  onSubmit(){
    console.log(this.user);
    this.ds.postDataToNodeServer(this.user.email,this.user.password)
    .subscribe({
      next:data=>console.log(data)
    })



  }



}
