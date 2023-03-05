import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { AltaPeliculaComponent } from './components/peliculas/alta-pelicula/alta-pelicula.component';
import { PeliculaComponent } from './components/peliculas/pelicula/pelicula.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

const routes: Routes = [ 
  { path: 'home', component: HomeComponent}, // enlace a home
  { path: 'about', component: AboutComponent}, // enlace a about
  { path: 'peliculas', component: PeliculasComponent}, // enlace a peliculas
  { path: 'peliculas/alta', component: AltaPeliculaComponent},
  { path: 'peliculas/:id', component: PeliculaComponent}, // enlace a detalle de una pelicula
  { path: 'buscar/:termino', component: PeliculasComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' } // enlace a home en caso de 404

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
