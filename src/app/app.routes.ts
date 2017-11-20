import { Routes } from '@angular/router';

import { AnimeComponent } from 'app/anime/anime.component';
import { AnimeDetailComponent } from 'app/anime/animeDetail.component';
import { GalleryComponent } from 'app/gallery.component';
import { AboutComponent } from 'app/about.component';

export const routes: Routes = [
  { path: '',   redirectTo: '/anime', pathMatch: 'full' },
  { path: 'anime', component: AnimeComponent, data: {title: 'Studio Ghibli Film'} },
  { path: 'anime/:id', component: AnimeDetailComponent, data: {title: 'Studio Ghibli Film'} },
  { path: 'gallery', component: GalleryComponent, data: {title: 'Gallery'} },
  { path: 'about', component: AboutComponent, data: {title: 'About'} },
  { path: '**', component: AnimeComponent, data: {title: 'Studio Ghibli Film'} }
];
