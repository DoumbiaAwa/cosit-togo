import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, RouterLinkActive], 
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MenuComponent {

}
