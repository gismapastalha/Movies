import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/peliculas/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private peliculas: Pelicula[];
  constructor(private httpClient:HttpClient) {
    this.peliculas = [];
   };

   public getPeliculas():Observable<Pelicula[]> {
    const path = "https://alcyon-it.com/APIS/Movies/index.php/peliculas"
    return this.httpClient.get<Pelicula[]>(path)
   }
  public getPelicula(id:string):Observable<Pelicula>  {
    const path = "https://alcyon-it.com/APIS/Movies/index.php/peliculas"

    return this.httpClient.get<Pelicula>(path+`/${id}`)
  }
  public buscarPeliculas(termino: string): Pelicula[] {
    return this.peliculas.filter(peli => {
      return peli.titulo.toLowerCase().includes(termino.toLowerCase());
    });
  }
   public postPelicula(pelicula: Pelicula): Observable<Pelicula> {
    const path = "https://alcyon-it.com/APIS/Movies/index.php/peliculas/"
    return this.httpClient.post<Pelicula>(path, JSON.stringify(pelicula))
   }

}
