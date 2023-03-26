import { Component } from '@angular/core';

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

  onSubmit(){
    console.log(this.user);
  }



}
