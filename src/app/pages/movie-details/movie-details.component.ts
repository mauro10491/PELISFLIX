import { Component, EventEmitter, Output } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { ActivatedRoute } from '@angular/router';
import { CartComponent } from '../cart/cart.component'; 
import { LocalStorageServiceService } from 'src/app/service/local-storage-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  constructor(private service: MovieApiServiceService, private router: ActivatedRoute, private localStorageService: LocalStorageServiceService){}

  movieDetailsResult:any;
  movieVideoResults:any;
  movieCastResults:any;

  ngOnInit(): void{
    let id = this.router.snapshot.paramMap.get('id');
    console.log(id)
    this.getMovie(id)
    this.video(id)
    this.cast(id)
  }

  getMovie(id:any){
    this.service.movieDetails(id).subscribe((data) => {
      console.log(data, "Get Movie Data");
      this.movieDetailsResult = data;
      
    });
  }

  video(id:any){
    this.service.movieVideo(id).subscribe((data) => {
      console.log(data);
      data.results.forEach((element:any) => {
        if(element.type == "Trailer"){
          this.movieVideoResults = element.key;
        }
      });
      
    });
  }

  cast(id:any){
    this.service.movieCast(id).subscribe((data) => {
      console.log(data);
      this.movieCastResults = data.cast; 
    });
  }

  agregarCarrito(name:any, price:number){
    console.log(name, price);
    this.localStorageService.agregarAlCarrito({
      name: name,
      price: price
    });
    return false;
    
  }


}
