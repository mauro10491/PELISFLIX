import { Injectable } from '@angular/core';
import { movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServiceService {

  movie: movie[] = [];

  constructor() { }

  agregarAlCarrito(movie: movie){
    this.movie.push(movie)
    let movies: movie[] = [];
    if(localStorage.getItem('movies') === null){
      movies.push(movie);
      localStorage.setItem('movies', JSON.stringify(movies));
    }else{
      movies = JSON.parse(localStorage.getItem('movies') ?? '[]');
      movies.push(movie);
      localStorage.setItem('movies', JSON.stringify(movies));
    }
  }

  getMovie(){
    if(localStorage.getItem('movies') === null){
      return this.movie;
    }else{
      this.movie = JSON.parse(localStorage.getItem('movies') ?? '[]');
      return this.movie;
    }
  }
}
