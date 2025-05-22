import { Component } from '@angular/core';
import { SpotifySearchService } from '../../services/spotify-search.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrl: './playlists.component.css'
})
export class PlaylistsComponent {
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
