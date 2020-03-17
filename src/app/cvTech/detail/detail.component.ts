import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/model/personne';
import { CvService } from 'src/app/cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  personne: Personne;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(Number(params.id));
        this.cvService.getPersonne(Number(params.id)).subscribe(
          (personne) => {
            console.log(personne);
            this.personne = personne;
          },
          (error) => {
            console.log('ERREUR : ', error);
          }
        );
        // this.personne = this.cvService.getPersonne(params.id);
        // console.log('Personne : ' , this.personne);
      }
    );
  }

  deletePersonne(): void {
    this.cvService.deletePersonne(this.personne.id).subscribe(
      (response) => {
        const link = ['cv'];
        console.log(response);
        this.router.navigate(link);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updatePersonne(id: number) {
    const link = ['cv/updateCv', id];
    console.log('Link : ', link);
    this.router.navigate(link);
  }

}
