import { Component } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public auth:AuthentificationService, public route : Router){}
  ngOnInit():void{
    if(this.auth.getToken()){
      this.route.navigate(['/home'])
    }
  }
  login(){
    this.auth.login();
  }

}
