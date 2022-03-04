import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { Movie } from '../movie';
import { MovieDataService } from '../movie-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  providers: [MovieDataService]
})
export class MovieDetailsComponent implements OnInit {

  constructor(private movieService: MovieDataService, private route: ActivatedRoute) { 
    this.movieDetails = {
        "_id": '',
        "name": '',
        "image": '',
        "price": 0,
        "description": '',  
        "ratings": {
        "averageRating": 0,
        "imdbRating": 0,
      }
    }
  }
  
  movieDetails: Movie

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
       return this.movieService.getSingleMovie(params['id'])
      })
    ).subscribe(
          response => {
            if (!response) {
              console.log(Error)
            } else {
              this.movieDetails = response.body;
            }
          })
  }

}
