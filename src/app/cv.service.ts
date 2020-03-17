import { Injectable } from '@angular/core';
import { Personne } from './model/personne';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private personnes: Personne[];
  link = 'http://localhost:3000/api/personnes';

  constructor(
    private http: HttpClient
  ) {
    this.personnes = [
      new Personne(1, 'KONAN', 'Paulin', 120, 1223456, 'Informaticien', 'moi.jpg' ),
      new Personne(2, 'KONAN', 'Pacôme', 130, 3647845, 'Responsable de scoop', 'pc.jpg' ),
      new Personne(3, 'Test', 'Test', 150, 78231845, 'test', '' )
    ];
  }

  getFakePersonnes(): Personne[] {
    return this.personnes;
  }

  getPersonnes(): Observable <Personne []> {
    return this.http.get<Personne[]> (this.link);
  }

  getFakePersonne(id: number): Personne {
    const personne = this.personnes.find(
      (personne) => {
        if (personne.id == id) {
          return personne;
        }
      }
    );
    console.log(personne);
    return personne;
  }

  getPersonne(id: number): Observable <Personne> {
    console.log('LINK : ', this.link + `/${id}`);
    return this.http.get<Personne> (this.link + `/${id}`);
  }

  addFakePersonne(personne: Personne): void {
    personne.id = this.personnes[this.personnes.length - 1].id + 1;
    this.personnes.push(personne);
  }

  addPersonne(personne: Personne): Observable <any> {
    // const token = localStorage.getItem('token');
    // if (token) {
    //   console.log('TOKEN : ',token)
    //   const params = new HttpParams().set('access_token', token);
    //   return this.http.post(this.link, personne, {params});
    // } else {
      // Pas de token, ça retournera une erreur 401 : Accès non autorisé!
      return this.http.post(this.link, personne);
    // }
  }

  deletePersonne(id: number): Observable <any> {
    console.log('LINK : ', this.link + `/${id}`);
    return this.http.delete<any> (this.link + `/${id}`);
  }

  updatePersonne(personne: Personne) {
    console.log('LINK : ', this.link + `/${personne.id}`);
    return this.http.put<any> (this.link + `/${personne.id}`, personne);
  }

  findByName(name: string): Observable<Personne []> {
    const filter = `{"where": {"name": {"like": "%${name}%"}}}`;
    const params = new HttpParams().set('filter', filter);
    return this.http.get<Personne []> (this.link, {params});
  }

}
