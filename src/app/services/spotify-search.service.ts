import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifySearchService {

  songs:any
  likedSongs:any
  id=null
  typeSong=null
  uriSong=null
  query:any



  constructor(private http: HttpClient) {}



  search(query: string): void {

    const apiUrl = 'https://spotify23.p.rapidapi.com/search/';
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '200a855f73mshed391d682487fd9p1ae033jsn82cfa5956ee3',  
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
    });


    const params = {
      q: query,
      type: 'multi',
      limit: '35',
      numberOfTopResults: '6',
    };
  
    this.query= query
    this.http.get<any>(apiUrl, { headers: headers, params })
      .subscribe(
        (response) => {
          this.songs = response;  
         },
        (error) => {
          console.error('Error fetching search results:', error);
        }
      );
  }
  







 
  








  select(uri: any , id:any): void {

    const uriParts = uri.split(':');

    const typeSong = uriParts[1];  
    const uriSong = uriParts[2];  
 

    this.typeSong= typeSong
    this.uriSong= uriSong
    this.id= id

  }

 


  likeSong(): void {
    const url = `https://api.spotify.com/v1/me/tracks?ids=${this.id}`;  
  
    const headers = new HttpHeaders({
        'Authorization':  localStorage.getItem('tokenType')+' ' +localStorage.getItem('accessToken')
    });
  
     this.http.put<any>(url, null, { headers })
      .subscribe(
        (response) => {
          console.log('Song added to library:', response);
        } 
      );
  }
  

 
  getLikes(): void {
    const url = `https://api.spotify.com/v1/me/tracks`;  
    const headers = new HttpHeaders({
      'Authorization': localStorage.getItem('tokenType') + ' ' + localStorage.getItem('accessToken'),
    });
  
    this.http.get<any>(url, { headers })
      .subscribe(
        (response) => {
           this.likedSongs = response.items; 
        } 
      );
  }
  

  deleteLike(idsong:any){

    const url = `https://api.spotify.com/v1/me/tracks?ids=${idsong}`;  
  
    const headers = new HttpHeaders({
        'Authorization':  localStorage.getItem('tokenType')+' ' +localStorage.getItem('accessToken')
    });
  
    this.http.delete<any>(url, { headers })
      .subscribe(
        (response) => {
          console.log('Song added to library:', response);
        } 
      );

    this.getLikes()
  }


  clearsearch(){
    this.songs=null
 
  }

  closeWindow(){
    this.typeSong= null
    this.uriSong= null
    this.id= null
  }

}
