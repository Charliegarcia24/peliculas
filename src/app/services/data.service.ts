import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
  ) { }


  public getData(): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=79b0f199e4f3b861ce9b682fdfedcdd0&language=en-US&page=1');
  }

  public getMovie(movie_id: number): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/' + movie_id +  '?api_key=79b0f199e4f3b861ce9b682fdfedcdd0&language=en-US');
  }
  
  public searchMovie(movie_name: string): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=79b0f199e4f3b861ce9b682fdfedcdd0&language=en-US&query=' + movie_name);
  }


}
