import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-simulate',
  templateUrl: './router-simulate.component.html',
  styleUrls: ['./router-simulate.component.css']
})
export class RouterSimulateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToComponent(route) {
    const link  = [route];
    this.router.navigate(link);
  }

}
