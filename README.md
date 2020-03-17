pour démarrer le serveur, il faut faire :

use node 10
ng serve --o

Les utilisateurs sont enregistrés dans une base de données temporaire, qui s'efface à chaque redémarrage de l'api loopback.

Le démarrage de l'api se fait, en allant dans le dossier api

use node 10
cd api
node .

il faudra donc créer un nouvel utilisateur avant d'effectuer toute manipulation. Pour ce faire, il faut faire :

- démarrer l'api, 
- aller à l'adresse localhost:3000/explorer
- Dans la session user, cliquer sur  
POST /Users     Create a new instance of the model and persist it into the data source.
- Des données s'affiche. Dans la partie data, renseigner 
{
  "email": "paulin.konan@yahoo.fr",
  "password": "0000"
}

- cliquez sur Try it out.
- Un utilsateur vient d'être créé avec le email paulin.konan@yahoo.fr et le mot de passe 0000.

Identifiant de connexion (base de données en mémoire vive)
email     :  
password  : 



Pour mettre le projet en production. Il faut faire :
ng build --prod

Cela va convertir tout le typescript en javascript. Et éventuellement, indiquer de potentielles erreurs. car certaines fonctions peuvent être exécutée en dev, et ne pas l'être ne prod. Il faudra donc les corriger et relancer la commande, si nécessaire.

Ensuite, il faut taper

npm install -g http-server

et enfin

http-server dist/FormaAnular20198/


Pour déployer sur Github, il faut 
- avoir un compte sur github


 

# FormaAnular20198

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
