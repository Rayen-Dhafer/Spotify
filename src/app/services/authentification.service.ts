import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
 
  
  constructor(private http: HttpClient, private router: Router) { }
 
  login() {
    const clientId = 'cbc15f0bc410411597198f7830392909'; // 75523c48fef24e2ea0a0378df08e93d5
    const redirectUri = 'https://spotifytn.netlify.app/home'; 
    const scopes = 'user-read-private user-read-email user-library-read user-top-read user-library-modify';

     
    const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;
    window.location.href = url;  

  }
  saveToken(){
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const accessToken = params.get('access_token');
      const tokenType = params.get('token_type');

      if (accessToken && tokenType) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('tokenType', tokenType);
      }
    }
  }
 

 

  logout() {
    this.clearToken();
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem('tokenType');
  }

  private clearToken() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('tokenType');
  }


}
