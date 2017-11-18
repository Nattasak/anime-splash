import { Routes } from '@angular/router';


import { AnimeComponent } from 'app/anime/anime.component';
import { AnimeDetailComponent } from 'app/anime/animeDetail.component';
import { GalleryComponent } from 'app/gallery.component';
import { AboutComponent } from 'app/about.component';


export const routes: Routes = [
  { path: '',   redirectTo: '/anime', pathMatch: 'full' },
  { path: 'anime', component: AnimeComponent },
  { path: 'anime/:id', component: AnimeDetailComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutComponent }
];
