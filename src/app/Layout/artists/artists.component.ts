import { Component } from '@angular/core';
import { SpotifySearchService } from '../../services/spotify-search.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.css'
})
export class ArtistsComponent {
    
   constructor( public spotifysearch:SpotifySearchService ){}
    
    
    ngOnInit():void{
      }


      select(song:any){
        this.spotifysearch.select(song.uri,song.id)
      }
}
