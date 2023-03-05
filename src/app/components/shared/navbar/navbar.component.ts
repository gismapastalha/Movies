import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit(): void {
  }
  public buscarPelicula(terminoBusqueda:string):void{
    if (terminoBusqueda.trim().length > 0) {
      this.ruta.navigate(['/buscar', terminoBusqueda]);
    }
  }

}
