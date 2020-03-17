import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from 'src/app/model/personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {

  @Input() personne: Personne;
  @Output() selectionOfPersonne = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectPersonne() {
    console.log(this.personne);
    this.selectionOfPersonne.emit(
      this.personne
    );
  }

}
