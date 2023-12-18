import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SlidebarService {

  constructor() { }

  // Cette méthode prend en paramètre la durée de l'intervalle en millisecondes et une fonction de rappel à exécuter à chaque itération
  startInterval(duration: number, callback: () => void): void {
    // Vous pouvez utiliser la fonction setInterval pour créer un intervalle de temps, par exemple :
    setInterval(callback, duration);
  }
}
