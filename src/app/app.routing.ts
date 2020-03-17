import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { CvComponent } from './cvTech/cv/cv.component';
import { ColorComponent } from './color/color.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guard/login.guard';
import { LogoutGuard } from './guard/logout.guard';
import { UpdateCvComponent } from './cvTech/update-cv/update-cv.component';


const APP_ROUTING: Routes = [
  {path: 'cv', children: [
    {path: '', component: CvComponent},
    {path: 'updateCv/:id', component: UpdateCvComponent},
    {path: 'add', component: AddCvComponent, canActivate: [LoginGuard]},
    {path: 'delete/:id', component: DeleteCvComponent, canActivate: [LoginGuard]},
    {path: ':id', component: DetailComponent},
  ]},
  {path: 'cv', redirectTo: '/', pathMatch: 'full'},
  // {path: 'color', component: ColorComponent},
  {path: 'color/:default', component: ColorComponent},
  {path: 'login', component: LoginComponent, canActivate: [LogoutGuard]},
  {path: '**', component: ErrorComponent}
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);





// children permet de faire 2 choses :
// Dans ce cas ci, il permet d'ajouter
// un préfixe aux routes add, delete/:id ...
// il s'agti du préfixe cv. il devient donc possible d'avoir les routes
// cv/add, cv/delete/1

// Il est possible d'utiliser children pour définir un autre niveau d'imbrication
// de component. En faisant :

// const APP_ROUTING: Routes = [
//   {path: 'cv', component: CvComponent, children: [
//     {path: '', component: CvComponent},
//     {path: 'add', component: AddCvComponent},
//     {path: 'delete/:id', component: DeleteCvComponent},
//     {path: ':id', component: DetailComponent},
//   ]},
//   ......
// ];

// et en ajoutant dans le template de CvComponent <<router-outlet></router-outlet>
// à l'emplacement ou on aimerait afficher les component des routes filles
