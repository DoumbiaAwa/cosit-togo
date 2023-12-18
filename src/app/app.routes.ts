import { Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { ProposComponent } from './propos/propos.component';
export const routes: Routes = [

    {
        path: 'page', 
        component: PageComponent 
      },

      {
        path: 'menu', 
        component: MenuComponent
      },

      {
        path: 'accueil', 
        component: AccueilComponent
      },

      {
        path: 'propos', 
        component: ProposComponent
      },

];
