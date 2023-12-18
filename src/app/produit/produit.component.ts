import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.scss'
})
export class ProduitComponent implements OnInit {
ngOnInit(): void {
    
}

carts: any [] =[
  {image: '../assets/point.png', nom: 'ARCHIPRO'},
  {image: '../assets/point.png', nom: 'ARCHIPRO'},
  {image: '../assets/point.png', nom: 'ARCHIPRO'},
  {image: '../assets/point.png', nom: 'ARCHIPRO'},

]
}
