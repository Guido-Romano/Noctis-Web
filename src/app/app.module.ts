import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { CreatorsComponent } from './creators/creators.component';
import { AppRoutingModule } from './app-routing.module';
import { Team1Component } from './teams/team1/team1.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StaffComponent } from './staff/staff.component';
import { LogoComponent } from './teams/team1/logo/logo.component';
import { ImgEquipoComponent } from './teams/img-equipo/img-equipo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamsComponent,
    CreatorsComponent,
    Team1Component,
    AboutUsComponent,
    StaffComponent,
    LogoComponent,
    ImgEquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
