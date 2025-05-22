import { Component } from '@angular/core';
import { SpotifySearchService } from '../../services/spotify-search.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.css'
})
export class EpisodesComponent {
   constructor( public spotifysearch:SpotifySearchService ){}
    
    
    ngOnInit():void{
      }


      select(song:any){
        this.spotifysearch.select(song.uri,song.id)
      }

      get3Words(name: string): string {
        return name.split(' ').slice(0, 3).join(' ');
      }
}
