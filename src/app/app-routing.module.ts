import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WhoComponent } from './who/who.component';
import { PrestationsComponent } from './prestations/prestations.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';

const routes: Routes = [
  { path : "", component : HomeComponent},
  { path : "accueil", component : HomeComponent},
  { path : "qui-sommes-nous", component : WhoComponent},
  { path : "prestations", component : PrestationsComponent},
  { path : "formulaire", component : FormulaireComponent},
  { path : "mentions-legales", component : MentionsLegalesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
