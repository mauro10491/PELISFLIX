import { Component, Input } from '@angular/core';
import { LocalStorageServiceService } from 'src/app/service/local-storage-service.service';
import { movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

constructor(private localStorageService: LocalStorageServiceService){}

  movie: movie[] = [];  

  ngOnInit(){
    this.movie = this.localStorageService.getMovie();
  }

}
