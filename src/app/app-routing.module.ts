import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { Team1Component } from './teams/team1/team1.component'; 


import { ContactComponent } from './contact/contact.component';
import { Creator1Component } from './creators/creator1/creator1.component'; // Importa el componente específico para el Creador N1
import { Creator2Component } from './creators/creator2/creator2.component'; // Importa el componente específico para el Creador N2
import { Creator3Component } from './creators/creator3/creator3.component'; // Importa el componente específico para el Creador N3


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teams', redirectTo: 'teams/team1', pathMatch: 'full' },
  { path: 'teams/team1', component: Team1Component, data: { title: 'Counterstrike' } },
  { path: 'contact', component: ContactComponent },
  { path: 'creators/creator1', component: Creator1Component, data: { title: 'Creador1' } }, // Ruta para el Creador N1
  { path: 'creators/creator2', component: Creator2Component, data: { title: 'Creadordos' } }, // Ruta para el Creador N2
  { path: 'creators/creator3', component: Creator3Component, data: { title: 'Creadortres' } }, // Ruta para el Creador N3
  { path: 'creators', redirectTo: 'creators/creator1', pathMatch: 'full' }, // Redirecciona al primer creador por defecto
  { path: '**', redirectTo: '', pathMatch: 'full'} // Ruta por defecto
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

