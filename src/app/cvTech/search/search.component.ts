import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/personne';
import { CvService } from 'src/app/cv.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  chaine = '';
  searchResult: Personne[];
  constructor(
    private cvService: CvService,
    private router: Router
  ) {
    this.searchResult = [];
  }

  ngOnInit() {
  }

  search() {
    const name = this.chaine.trim();
    console.log(name);
    if (name.length) {
      this.cvService.findByName(name).subscribe(
        (personnes) => {
          this.searchResult = personnes;
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      this.searchResult = [];
    }
  }

  selectPersonne(personne: Personne) {
    console.log(personne);
    const link = ['cv', personne.id];
    this.router.navigate(link);
    this.chaine = '';
    this.searchResult = [];
  }

}
