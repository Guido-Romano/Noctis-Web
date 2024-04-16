import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { CreatorsComponent } from './creators/creators.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { Team1Component } from './teams/team1/team1.component';
import { Creator1Component } from './creators/creator1/creator1.component';
import { Creator2Component } from './creators/creator2/creator2.component';
import { Creator3Component } from './creators/creator3/creator3.component';
import { Imagen1Component } from './home/imagen1/imagen1.component';
import { Imagen2Component } from './home/imagen2/imagen2.component';
import { Imagen3Component } from './home/imagen3/imagen3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamsComponent,
    CreatorsComponent,
    ContactComponent,
    Team1Component,
    Creator1Component,
    Creator2Component,
    Creator3Component,
    Imagen1Component,
    Imagen2Component,
    Imagen3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
