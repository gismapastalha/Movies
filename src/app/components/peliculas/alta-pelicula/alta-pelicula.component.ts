import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/peliculas/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';
@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css']
})
export class AltaPeliculaComponent implements OnInit {
  public pelicula:Pelicula  
  constructor(private peliculasService: PeliculasService) {
    this.pelicula = {
      id: 10,
      titulo: 'La mejor pelicula ',
      sinopsis: 'hola a todos me presento soy la mejor pelicula del año',
      img: 'sinportada.jpg',
      anio: 2000,
      direccion: 'Mejor pelicula'
      }
   }
   public altaPelicula() {

    this.peliculasService.postPelicula(this.pelicula).subscribe({
      next: (pelicula) => {alert("Alta efectuada") },
    })
    }
  ngOnInit(){
}
}
