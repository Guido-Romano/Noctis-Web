import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Team1Component } from './teams/team1/team1.component'; 
import { CreatorsComponent } from './creators/creators.component';
import { StaffComponent } from './staff/staff.component';
import { AboutUsComponent } from './about-us/about-us.component'; // Corregido


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teams', redirectTo: 'teams/team1', pathMatch: 'full' },
  { path: 'teams/team1', component: Team1Component, data: { title: 'Counterstrike' } },
  { path: 'creators', component: CreatorsComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'about-us', component:  AboutUsComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'} // Ruta por defecto
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

