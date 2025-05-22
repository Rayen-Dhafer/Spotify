import { Component } from '@angular/core';
import { SpotifySearchService } from '../../services/spotify-search.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
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
