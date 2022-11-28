import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  url = 'https://api.themoviedb.org/3/';
  constructor(private http: HttpClient) {}
  getMovies() {
    return axios.get(this.url + 'movie/505642?api_key=' + environment.API_KEY);
  }
}
