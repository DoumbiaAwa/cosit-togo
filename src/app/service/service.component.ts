import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidebarService } from '../slidebar.service';
@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent implements OnInit {

  constructor(private slideBarservice: SlidebarService) { }

  ngOnInit(): void {
    this.slideBarservice.startInterval(3000, () => {
      // Cette fonction sera exécutée toutes les 3 secondes
      // Vous pouvez changer l'index de la carte ici, par exemple :
      this.index = (this.index + 1) % this.cartes.length;
    });
  }
  
  cartes = [
    {image: "../assets/pc.png", texte: "Installation et configuration de réseaux informatique"},
    {image: "../assets/pc.png", texte: "Conception et hébergement de plateformes Web"},
    {image: "../assets/pc.png", texte: "Analyse de données"},
    {image: "../assets/pc.png", texte: "Formation"},
    {image: "../assets/pc.png", texte: "Développement de solutions informatiques"},
    {image: "../assets/pc.png", texte: "Fourniture de matériels informatiques"},
    {image: "../assets/pc.png", texte: "Installation et configuration de logiciels et systèmes d'exploitation"}
  ];
  index = 0;
}
