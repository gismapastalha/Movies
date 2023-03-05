import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PeliculasService } from './services/peliculas.service';
import { SmartTruncatePipe } from './pipes/smart-truncate.pipe';
import { PeliculaComponent } from './components/peliculas/pelicula/pelicula.component';
import { AltaPeliculaComponent } from './components/peliculas/alta-pelicula/alta-pelicula.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import { TemplateComponent } from './components/template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PeliculasComponent,
    SmartTruncatePipe,
    PeliculaComponent,
    AltaPeliculaComponent,
    //TemplateComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
