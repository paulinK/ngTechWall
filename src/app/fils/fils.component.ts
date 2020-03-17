import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

  @Input() filsProperty;
  @Output() sendRequestToData = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('La propriété color de mon père est : ' , this.filsProperty);
  }

  sendRequest(): any {
    this.sendRequestToData.emit(
      ` Can I have some money please :)`
    );

    console.log(this.sendRequestToData);
  }

}
