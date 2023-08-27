import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { BibliotecaVideosComponent } from './biblioteca-videos/biblioteca-videos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EstadisticasComponent,
    BibliotecaVideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
