import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { Movie } from '../interfaces/movies';
import { OmdbApiResponse } from '../interfaces/omdbApiResponse';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private API_URL: string = 'http://www.omdbapi.com/?';
  private API_KEY: string = '&apikey=' + environment.API_KEY;
  constructor(private http: HttpClient) {}
  getMoviesByName(movieName: string): Observable<Movie[]> {
    return this.http
      .get<OmdbApiResponse>(this.API_URL + 's=' + movieName + this.API_KEY)
      .pipe(
        map((response) => {
          return response.Search;
        })
      );
  }
}
