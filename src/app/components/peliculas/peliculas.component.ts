import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from 'src/app/models/peliculas/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  public peliculas: Pelicula[];  
  constructor(private peliculasService: PeliculasService, private router:Router, private rutaActiva: ActivatedRoute) {
    this.peliculas = []
   }

  ngOnInit(){
    /*this.rutaActiva.paramMap.subscribe( params => {
      let termino = params.get('termino') || '';
      if (termino != '') {
      this.peliculas = this.peliculasService.buscarPeliculas(termino);
      } else {
      this.peliculas = this.peliculasService.getPeliculas();
      }
      });*/
      this.peliculasService.getPeliculas().subscribe({
        //respuesta cuando se complete la petición
        next: (peliculas) => {
        this.peliculas = peliculas
        },
        //respuesta en caso de error
        error: (error) => {
        alert("algo fué mal")
        console.log(error.error)
        }
        });
  }
}
