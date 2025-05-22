import { Component } from '@angular/core';
import { SpotifySearchService } from '../../services/spotify-search.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-player-song',
  templateUrl: './player-song.component.html',
  styleUrl: './player-song.component.css'
})
export class PlayerSongComponent {
  typeSong:any
  uriSong :any
      constructor( public spotifysearch:SpotifySearchService, public sanitizer: DomSanitizer ){}
      
      ngOnInit():void{
        this.typeSong= this.spotifysearch.typeSong
        this.uriSong = this.spotifysearch.uriSong
      }

      
      addToLikes(){
         this.spotifysearch.likeSong()
      }
}
