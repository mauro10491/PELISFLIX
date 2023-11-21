import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: MovieApiServiceService) {

  }

  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  scienceFictionMovieResult: any = [];
  thrillerMovieResult: any = [];


  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.animatioMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.scienceFictionMovie();
    this.thrillerMovie();
  }

  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'Resultado banner Api');
      this.bannerResult = result.results;
    });
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'Trending Movies');
      this.trendingMovieResult = result.results;
    })
  }

  actionMovie() {
    this.service.actionMovies().subscribe((data) => {
      console.log(data, 'action');
      this.actionMovieResult = data.results;
    })
  }
  adventureMovie() {
    this.service.adventureMovies().subscribe((data) => {
      console.log(data, 'adventure');
      this.adventureMovieResult = data.results;
    })
  }

  animatioMovie() {
    this.service.animationMovies().subscribe((data) => {
      console.log(data, 'animatio');
      this.animationMovieResult = data.results;
    })
  }

  comedyMovie() {
    this.service.comedyMovies().subscribe((data) => {
      console.log(data, 'comedy');
      this.comedyMovieResult = data.results;
    })
  }

  documentaryMovie() {
    this.service.documentaryMovies().subscribe((data) => {
      console.log(data, 'documentary');
      this.documentaryMovieResult = data.results;
    })
  }

  scienceFictionMovie() {
    this.service.scienceFictionMovies().subscribe((data) => {
      console.log(data, 'scienceFiction');
      this.scienceFictionMovieResult = data.results;
    })
  }

  thrillerMovie() {
    this.service.documentaryMovies().subscribe((data) => {
      console.log(data, 'thriller');
      this.thrillerMovieResult = data.results;
    })
  }
}
