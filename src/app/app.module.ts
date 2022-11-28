import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesListComponent,
    SearchMovieComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
