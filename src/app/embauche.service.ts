import { Injectable } from '@angular/core';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private personnes: Personne[];
  constructor() {
    this.personnes = [];
   }

  embaucher(personne: Personne): void {
    // console.log(personne);
    const index   = this.personnes.indexOf(personne);
    if (index < 0) {
      this.personnes.push(personne);
    } else {
      alert('Cette personne est déjà embauchée !');
    }
  }

  debaucher(personne): void {
    const index   = this.personnes.indexOf(personne);
    if (index >= 0) {
      this.personnes.splice(index, 1);
    }
  }

  getPersonnesEmbauchees(): Personne[] {
    return this.personnes;
  }
}
