import { Component, OnInit, Input } from '@angular/core';
import { Personne } from 'src/app/model/personne';
import { EmbaucheService } from 'src/app/embauche.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {

  @Input() personne: Personne;

  constructor(
    private embaucheService: EmbaucheService,
    private router: Router) { }

  ngOnInit() {
  }

  embaucher(): void {
    console.log(this.personne);
    this.embaucheService.embaucher(this.personne);
  }

  moreInfo(): void {
    const link = ['cv', this.personne.id];
    this.router.navigate(link);
  }

}
