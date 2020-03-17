import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from 'src/app/cv.service';
import { Personne } from 'src/app/model/personne';

@Component({
  selector: 'app-update-cv',
  templateUrl: './update-cv.component.html',
  styleUrls: ['./update-cv.component.css']
})
export class UpdateCvComponent implements OnInit {
  personne: Personne = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.cvService.getPersonne(params.id).subscribe(
          (personne) => {
            this.personne = personne;
            // console.log('Personne : ', personne);
          },
          (error) => {
            console.error(error);
          }
        );
      }
    );
  }

  updatePersonne() {
    this.cvService.updatePersonne(this.personne).subscribe(
      (response) => {
        console.log(response);
        const link = ['cv'];
        this.router.navigate(link);
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
