import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Movie } from '../models/movie.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.scss']
})
export class DetailFilmComponent implements OnInit {

  private movie_id: number = 0;
  public movie: Movie = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.movie_id = this.activatedRoute.snapshot.params['id'];

    this.dataService.getMovie(this.movie_id).pipe(
      tap((data: Movie) => {
        this.movie = data;
      })
    ).subscribe();

  }

}
