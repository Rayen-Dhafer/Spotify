import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
 
  
  constructor(private http: HttpClient, private router: Router) { }
 
login() {
  const clientId = 'cbc15f0bc410411597198f7830392909';
  const redirectUri = 'https://spotifytn.netlify.app/home';

  const scopes = [
    'user-read-private',
    'user-read-email',
    'user-library-read',
    'user-top-read',
    'user-library-modify'
  ].join(' ');

  const url =
    `https://accounts.spotify.com/authorize` +
    `?response_type=token` +
    `&client_id=${clientId}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=${encodeURIComponent(scopes)}`;

  window.location.href = url;
}
saveToken() {
  const hash = window.location.hash;

  if (!hash) return;

  const params = new URLSearchParams(hash.replace('#', ''));
  const accessToken = params.get('access_token');

  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);

    // IMPORTANT: clean URL
    window.history.replaceState({}, document.title, '/home');
  }
}
 

 

  logout() {
    this.clearToken();
    this.router.navigate(['/login']);
  }

getToken(): string | null {
  return localStorage.getItem('accessToken');
}
  private clearToken() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('tokenType');
  }


}
