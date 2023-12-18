import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, RouterLinkActive], 
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

}
