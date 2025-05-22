import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private http: HttpClient, private route: Router) { }
  userData:any 
  getUser(){

    const headers = new HttpHeaders({
      'Authorization':  localStorage.getItem('tokenType')+' ' +localStorage.getItem('accessToken')
    });
    console.log(localStorage.getItem('accessToken'))

    this.http.get('https://api.spotify.com/v1/me', { headers })
    .subscribe(
      response => {
        console.log(response)
        this.userData = response;
      },
      error => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('tokenType');
        this.route.navigate(['/login']);
      }
    );
  }


  
}
