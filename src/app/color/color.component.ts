import { Component, OnInit } from '@angular/core';
import { PremierService } from '../premier.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  // providers: [PremierService] Ce code permettra à l'injecteur de créer une nouvelle
  // instance de PremierService pour cette classe.
  // En effet, l'injecteur recherche l'instance de la classe PremierService
  // le plus proche, dans la liste des parents du component color, pour l'injecter.
})
export class ColorComponent implements OnInit {
  bgColor = 'red';

  color = 'red';
  constructor(
    private premierService: PremierService,
    private router: Router,
    private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.premierService.logger('test');
    this.activedRoute.params.subscribe( // params est un observable
      (params) => {                     // on doit donc souscrire à params
        this.color = params.default;            // pour lire le flux de données qui arrive par son canal
      }
    );
  }

  changeStatus(input) {
    console.log(input);
    console.log(input.value);
    this.bgColor  = input.value;
    input.value   = '';
  }

  fromMySon(event) {
    alert(event);
  }

  GoToCv() {
    const link = ['cv'];
    this.router.navigate(link);
  }

}
