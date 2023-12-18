import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProposComponent } from './propos/propos.component';
import { ServiceComponent } from './service/service.component';
import { ProduitComponent } from './produit/produit.component';
import { TemoingnageComponent } from './temoingnage/temoingnage.component';
@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    CommonModule,
     RouterOutlet,
      RouterLink,
       RouterLinkActive,
        MenuComponent,
        AccueilComponent,
        ProposComponent,
        ServiceComponent, 
        ProduitComponent,
        TemoingnageComponent
      ], 
 templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cosit';
}


