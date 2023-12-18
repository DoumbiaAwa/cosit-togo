import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementRef } from '@angular/core';
import { Inject } from '@angular/core';

@Component({
selector: 'app-service',
standalone: true,
imports: [CommonModule],
templateUrl: './service.component.html',
styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  // index: number = 0;
  // timer: any; 
  //  contenu : ElementRef<HTMLElement>;
// constructor( @Inject(ElementRef) private elementRef: ElementRef) {
//   this.contenu = elementRef; 
// }

ngOnInit(): void {
// this.index = 0;
// this.timer = setInterval(() => {
// this.index = (this.index + 1) % this.cartes.length;
// this.contenu.nativeElement.style.transform = 'translateX(' + (-33 * (this.index % 3)) + '%)';

// }, 500);
}

cartes: any[] = [
{image: '../assets/pc.png', texte: 'Installation et configuration de réseaux informatique'},
{image: '../assets/pc.png', texte: 'Conception et hébergement de plateformes Web'},
{image: '../assets/pc.png', texte: 'Analyse de données'},
{image: '../assets/pc.png', texte: 'Formation'},
{image: '../assets/pc.png', texte: 'Développement de solutions informatiques'},
{image: '../assets/pc.png', texte: 'Fourniture de matériels informatiques'},
{image: '../assets/pc.png', texte: 'Installation et configuration de logiciels et systèmes dexploitation'},
];

// stopTimer() {
// clearInterval(this.timer);
// }
}