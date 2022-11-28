import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input('movie') movie: any;
  constructor() {}
  ngOnInit(): void {
    console.log(this.movie);
  }
}
