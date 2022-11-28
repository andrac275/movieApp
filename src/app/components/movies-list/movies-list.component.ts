import { Component, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent {
  movies: any[] = [];
  constructor(private moviesService: MoviesService) {}
  getMoviesByName(movieName: string) {
    this.moviesService.getMoviesByName(movieName).subscribe((movies) => {
      this.movies = movies !== undefined ? movies : [];
    });
  }
}
