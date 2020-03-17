import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authentificationService: AuthentificationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(credentials) {
    console.log(credentials);
    this.authentificationService.login(credentials).subscribe(
      (response) => {
        console.log(response.id);
        const token = response.id;
        localStorage.setItem('token', token);
        const link = ['cv'];
        this.router.navigate(link);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
