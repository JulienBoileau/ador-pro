import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css', './carousel.css']
})
export class PresentationComponent {

  constructor(private router : Router) {}

  goToWho() {
    this.router.navigate(['/qui-sommes-nous']);
  }

}
