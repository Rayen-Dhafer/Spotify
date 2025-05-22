import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AccountComponent } from './Layout/account/account.component';
import { FavoritesComponent } from './Layout/favorites/favorites.component';
import { AboutUsComponent } from './Layout/about-us/about-us.component';
import { AllComponent } from './Layout/all/all.component';
import { FormsModule } from '@angular/forms';
import { PlayerSongComponent } from './Layout/player-song/player-song.component';
import { ArtistsComponent } from './Layout/artists/artists.component';
import { PlaylistsComponent } from './Layout/playlists/playlists.component';
import { AlbumsComponent } from './Layout/albums/albums.component';
import { PodcastsComponent } from './Layout/podcasts/podcasts.component';
import { EpisodesComponent } from './Layout/episodes/episodes.component';
import { MusiquesComponent } from './Layout/musiques/musiques.component'; // Import FormsModule

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AccountComponent,
    FavoritesComponent,
    AboutUsComponent,
    AllComponent,
    PlayerSongComponent,
    ArtistsComponent,
    PlaylistsComponent,
    AlbumsComponent,
    PodcastsComponent,
    EpisodesComponent,
    MusiquesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
