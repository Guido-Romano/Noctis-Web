import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { CreatorsComponent } from './creators/creators.component';
import { AppRoutingModule } from './app-routing.module';
import { Team1Component } from './teams/team1/team1.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StaffComponent } from './staff/staff.component';
import { ImgEquipoComponent } from './teams/img-equipo/img-equipo.component';
import { CamisetasComponent } from './teams/camisetas/camisetas.component';
import { LogoComponent } from './logo/logo.component';
import { BannerComponent } from './banner/banner.component';
import { Texto2EquipoComponent } from './teams/team1/texto2-equipo/texto2-equipo.component';
import { CartaComponent } from './creators/carta/carta.component';
import { CartaStaffComponent } from './staff/carta-staff/carta-staff.component';
import { PComponent } from './p/p.component';
import { PlayercardComponent } from './playercard/playercard.component';
import { VideofonComponent } from './videofon/videofon.component';





export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamsComponent,
    CreatorsComponent,
    Team1Component,
    AboutUsComponent,
    StaffComponent,
    ImgEquipoComponent,
    CamisetasComponent,
    LogoComponent,
    BannerComponent,
    Texto2EquipoComponent,
    CartaComponent,
    CartaStaffComponent,
    PComponent,
    PlayercardComponent,
    VideofonComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Importa HttpClientModule
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    // Otros módulos
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
