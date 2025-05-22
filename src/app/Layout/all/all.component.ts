import { Component } from '@angular/core';
import { SpotifySearchService } from '../../services/spotify-search.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent {

    constructor( public spotifysearch:SpotifySearchService ){}
    
    
    ngOnInit():void{
     }
    

    select(song:any){
      this.spotifysearch.select(song.uri,song.id)
    }

    formatDuration(milliseconds: number): string {
      const minutes = Math.floor(milliseconds / 60000);  
      const seconds = Math.floor((milliseconds % 60000) / 1000);  
      return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;  
    }

    getFirstTwoWords(name: string): string {
      return name.split(' ').slice(0, 2).join(' ');
    }

    get3Words(name: string): string {
      return name.split(' ').slice(0, 3).join(' ');
    }
}
