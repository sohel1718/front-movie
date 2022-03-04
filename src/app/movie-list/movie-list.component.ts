import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieDataService } from '../movie-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  providers: [MovieDataService]
})
export class MovieListComponent implements OnInit {

  movies: Movie[]

  constructor(private movieService: MovieDataService) { 
    this.movies = [];
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((response: any) => {
        if (!response) {
          console.log(Error)
        } else {
          this.movies = response.body.map((movie: any) => {
                return movie;
          });
        }
      })
  }

}
