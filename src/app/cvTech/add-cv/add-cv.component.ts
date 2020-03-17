import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CvService } from 'src/app/cv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {

  errorMessage = '';

  constructor(
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addFakePersonne(formulaire: NgForm) {
    const link = ['cv'];
    this.cvService.addPersonne(formulaire.value);
    this.router.navigate(link);
  }

  addPersonne(formulaire: NgForm) {
    const link = ['cv'];
    this.cvService.addPersonne(formulaire.value).subscribe(
      (result) => {
        console.log(result);
        this.router.navigate(link);
      },
      (error) => {
        this.errorMessage = `Problème de connexion à la base de données. Veuillez
          informer l'administrateur.`;
        console.log(error);
      }
    );
  }

}
