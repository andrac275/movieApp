import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies';
import { Router } from '@angular/router';
@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input('movie') movie!: Movie;
  id: string = '';

  constructor(private router: Router) {}
  ngOnInit(): void {
    console.log(this.movie);
  }
  moreInfoClick(identifier: string) {
    console.log('movie id: ' + identifier);
    this.router.navigate(['/movieInfo']);
  }
}
