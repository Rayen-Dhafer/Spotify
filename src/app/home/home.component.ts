import { Component } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { SpotifySearchService } from '../services/spotify-search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  showContainer: boolean = true;
  searchQuery: string = '';  
  MyClass: string[] = Array(7).fill("btn");

  constructor(public auth:AuthentificationService, public user:UserService, public spotifysearch:SpotifySearchService, public route : Router){}
  ngOnInit():void{

    this.MyClass[0]="btn active"
    if(!this.auth.getToken()){
      this.route.navigate(['/login'])
    }
    this.auth.saveToken();
    this.user.getUser();

    this.checkUrl();

     this.route.events.subscribe(() => {
      this.checkUrl();
    });
  }
  


  changecategory(n:number){
    for (let i = 0; i < 7; i++) {
      this.MyClass[i] = "btn";
    }
    this.MyClass[n]="btn active"  
  }

  search(): void {
    if(this.searchQuery){
      this.spotifysearch.search(this.searchQuery)
    }
  }

  clearsearch(){
    this.searchQuery= ''
    this.spotifysearch.clearsearch()
  }


  checkUrl() {
    this.showContainer = ( this.route.url !== '/home/account' && this.route.url !== '/home/favorites' &&  this.route.url !== '/home/aboutUs')
  }


}
