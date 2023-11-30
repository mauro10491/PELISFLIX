import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchResult:any;

  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  scienceFictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  constructor(private service: MovieApiServiceService){ 

  }

  ngOnInit(): void {
    this.actionMovie();
    this.adventureMovie();
    this.animatioMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.scienceFictionMovie();
    this.thrillerMovie();
  }


  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  });

  submitForm(){
    console.log(this.searchForm.value);
    this.service.searchMovie(this.searchForm.value).subscribe((data) => {
      console.log(data);
      this.searchResult = data.results;
    });
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
