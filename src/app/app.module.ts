import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SearchComponent } from './search/search.component';
import { UnheroeComponent } from './unheroe/unheroe.component';
import { AltasService} from './servicios/altas.service';
import { ListaComponent } from './lista/lista.component';
import { VideoComponent } from './video/video.component';
import { ExtraComponent } from './extra/extra.component';
import {YouTubePlayerModule} from '@angular/youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    SearchComponent,
    UnheroeComponent,
    ListaComponent,
    VideoComponent,
    ExtraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule
  ],
  providers: [AltasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
