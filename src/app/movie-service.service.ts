import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Movie } from './movie';

@Injectable()
export class MovieDataService {

  private moviesUrl = 'http://localhost:3000/api/getMovies';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<void | Movie[] | any> {
    return this.http.get(this.moviesUrl, { observe: 'response' })
  }

  getSingleMovie(movieId: String): Observable<void | Movie | any> {
    return this.http.get(this.moviesUrl + '/' + movieId, { observe: 'response' })
  }
}
