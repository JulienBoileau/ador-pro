import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private router : Router) {}

  ngOnInit(): void {}

  goToHome() {
    this.router.navigate(['/accueil']);
  }

  goToWho() {
    this.router.navigate(['/qui-sommes-nous']);
  }

  goToPrestations() {
    this.router.navigate(['/prestations']);
  }

}
