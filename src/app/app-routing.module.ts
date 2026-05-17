import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './Layout/account/account.component';
import { AboutUsComponent } from './Layout/about-us/about-us.component';
import { FavoritesComponent } from './Layout/favorites/favorites.component';
import { AllComponent } from './Layout/all/all.component';
import { ArtistsComponent } from './Layout/artists/artists.component';
import { PlaylistsComponent } from './Layout/playlists/playlists.component';
import { AlbumsComponent } from './Layout/albums/albums.component';
import { EpisodesComponent } from './Layout/episodes/episodes.component';
import { PodcastsComponent } from './Layout/podcasts/podcasts.component';
import { MusiquesComponent } from './Layout/musiques/musiques.component';

const routes: Routes = [
  { path: '', component: LoginComponent },

  { path: 'login', component: LoginComponent },

  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: AllComponent },

      { path: 'account', component: AccountComponent },
      { path: 'aboutUs', component: AboutUsComponent },
      { path: 'favorites', component: FavoritesComponent },

      { path: 'all', component: AllComponent },
      { path: 'musiques', component: MusiquesComponent },
      { path:'playlists', component: PlaylistsComponent},
      { path:'albums', component: AlbumsComponent},
      { path:'artists', component: ArtistsComponent},
      { path:'podcasts', component: PodcastsComponent},
      { path:'emissions', component: EpisodesComponent}

    ],
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
