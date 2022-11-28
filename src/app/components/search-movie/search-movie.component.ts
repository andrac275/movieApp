import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css'],
})
export class SearchMovieComponent {
  constructor() {}
  message = 'Search for a movie';

  searchMovie() {
    this.message = 'Searched';
  }
}
