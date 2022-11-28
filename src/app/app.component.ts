import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = "movie's list!!!";
  constructor(private moviesService: MoviesService) {
    this.moviesService.getMovies().then((response) => {
      console.log(response);
    });
  }
}
