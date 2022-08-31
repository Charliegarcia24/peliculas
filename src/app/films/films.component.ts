import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  public movies: any[] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getData().pipe(
      tap((data) => {
        this.movies = data.results;
      })
    ).subscribe();
  }


  public searchMovie(movie_name: any) {

    if (movie_name.target.value !== '') {
      this.dataService.searchMovie(movie_name.target.value).pipe(
        tap((data) => {
          this.movies = data.results;
        })
      ).subscribe();
    } else {
      this.dataService.getData().pipe(
        tap((data) => {
          this.movies = data.results;
        })
      ).subscribe();
    }

  }

}
