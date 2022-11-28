import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input('movie') movie!: Movie;
  id: string = '';

  constructor() {}
  ngOnInit(): void {
    console.log(this.movie);
    //this.id= movie.imdbID;
  }
  moreInfoClick(identifier: string) {
    console.log('movie id: ' + identifier);
  }
}
