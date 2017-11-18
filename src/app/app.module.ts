import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AnimeComponent } from './anime/anime.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
