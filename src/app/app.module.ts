import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PresentationComponent } from './presentation/presentation.component';
import { WhoComponent } from './who/who.component';
import { FooterComponent } from './footer/footer.component';
import { PrestationsComponent } from './prestations/prestations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    PresentationComponent,
    WhoComponent,
    FooterComponent,
    PrestationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
