import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from 'src/app/model/personne';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css']
})
export class ListeCvComponent implements OnInit {

  @Input() personnes: Personne[];
  @Output() getPersonneSelected = new EventEmitter();

  constructor() {

   }

  ngOnInit() {
    // console.log(this.personnes);
  }

  selectionOfPersonne(personne) {
    console.log('Personne : ', personne);
    this.getPersonneSelected.emit(
      personne
    );
  }

}
