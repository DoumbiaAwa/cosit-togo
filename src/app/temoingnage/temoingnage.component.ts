import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-temoingnage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temoingnage.component.html',
  styleUrl: './temoingnage.component.scss'
})
export class TemoingnageComponent {
cartes: any[]=[
  {image: '../assets/com.png', text: ' En tant que professionnel de la finance, ma visite chez COSIT a été une véritable révélation. Cette entreprise informatique allie ingénieusement l\'expertise technique à une vision stratégique qui transcende les frontières du monde numérique. ', nom:'Ibrahim Sy', proffession:'Financier'}
]
}
