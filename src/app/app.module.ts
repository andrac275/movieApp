import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modules
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieInformationComponent } from './components/movie-information/movie-information.component';

@NgModule({
  declarations: [AppComponent, MovieComponent, MoviesListComponent, MovieInformationComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
