import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WhoComponent } from './who/who.component';

const routes: Routes = [
  { path : "", component : HomeComponent},
  { path : "accueil", component : HomeComponent},
  { path : "qui-sommes-nous", component : WhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
