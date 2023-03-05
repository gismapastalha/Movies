import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from 'src/app/models/peliculas/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit { 
  public pelicula:Pelicula
  constructor(private peliculasService: PeliculasService, private ruta:ActivatedRoute) {
    this.pelicula = {
      id: 0,
      titulo: 'Pelicula 01',
      sinopsis: 'Babitch (Michael Rapaport), un policía de Nueva York, conduce de noche de vuelta a casa cuando es atacado por dos individuos. Intenta atraparlos, pero cuando le apuntan con una pistola, instintivamente, dispara y los mata. En un instante, el puente se llena de policías, que comprueban que los agresores no tenían ninguna pistola, y deciden actuar por su cuenta. Todos viven en un barrio de Nueva Jersey donde el sheriff, el bonachón Freddy Heflin (Sylvester Stallone), tiene jurisdicción sobre el caso. El asunto salta a los medios de comunicación, de modo que el investigador de asuntos internos (Robert de Niro) decide intervenir.',
      img: 'assets/img/sinportada.jpg',
      anio: 1999,
      direccion: 'Michael Rapaport'
     }
   }
  ngOnInit(){
    this.ruta.params.subscribe(params => {
      this.peliculasService.getPelicula(params['id']).subscribe({
        next: (pelicula) => {this.pelicula = pelicula},
        error: (error) => {
          alert("algo fué mal")
          console.log(error.error)
          }
      })
      })

  }

}
