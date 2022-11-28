import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private API_URL: string = 'http://www.omdbapi.com/?';
  private API_KEY: string = '&apikey=' + environment.API_KEY;
  constructor(private http: HttpClient) {}
  getMoviesByName(movieName: string): Observable<any> {
    return this.http.get(this.API_URL + 's=' + movieName + this.API_KEY);
  }
}
