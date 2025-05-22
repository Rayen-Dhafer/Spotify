import { Component } from '@angular/core';
import { SpotifySearchService } from '../../services/spotify-search.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
    constructor( public spotifysearch:SpotifySearchService ){}
    
    
    ngOnInit():void{
      this.spotifysearch.getLikes()
      }


      select(song:any){
        this.spotifysearch.select(song.uri,song.id)
      }

      getFirstTwoWords(name: string): string {
        return name.split(' ').slice(0, 2).join(' ');
      }

      formatDuration(milliseconds: number): string {
        const minutes = Math.floor(milliseconds / 60000);  
        const seconds = Math.floor((milliseconds % 60000) / 1000);  
        return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;  
      }
}
