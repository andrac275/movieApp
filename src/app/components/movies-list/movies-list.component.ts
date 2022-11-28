import { Component, Input } from '@angular/core';

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent {
  @Input() message: string = 'Search for a movie!';
  constructor() {}
}
