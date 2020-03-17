import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  visibility = false;

  constructor(
    private authentificationService: AuthentificationService
  ) {
   }

  ngOnInit() {
  }

  logout() {
    this.authentificationService.logout();
  }

  isLogged() {
    return this.authentificationService.isLogged();
  }

  show() {
    this.visibility = ! this.visibility;
  }

}
