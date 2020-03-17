import { Component, OnInit, Input } from '@angular/core';
import { Personne } from 'src/app/model/personne';
import { PremierService } from 'src/app/premier.service';
import { CvService } from 'src/app/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personne[];
  personneSelected: Personne;

  constructor(
    private premierService: PremierService,
    private cvService: CvService) {
  }

  ngOnInit() {
    this.premierService.addData('Data from cv component');
    this.premierService.logger(this.personnes);

    this.cvService.getPersonnes().subscribe(
      (personnes) => {
        this.personnes = personnes;
      },
      (error) => {
        alert('Erreur');
        console.log(error);
        this.personnes = this.cvService.getFakePersonnes();
      }
    );
  }

  selectionOfPersonne(personne) {
    console.log('Selection de personne : ', personne);
  }

  getPersonneSelected(personne) {
    this.personneSelected = personne;
  }

}
