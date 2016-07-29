import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Headers, Http, Response } from '@angular/http';

@Injectable()
export class HeroService {
  private heroesUrl = 'app/heroes';  // URL to web api

  constructor(private http: Http) { }

  getHeroes() {
    return this.http.get(this.heroesUrl)
        .toPromise()
        .then(response => response.json().data as Hero[])
        .catch(this.handleError);
    
  }

  search(term: string) {
    return this.http
        .get(`app/heroes/?name=${term}+`)
        .map((r: Response) => r.json().data as Hero[]);
  }

  // getHeroes() {
  //   return Promise.resolve(HEROES);
  // }

  private post(hero:Hero): Promise<Hero> {
      let headers = new Headers({
        'Content-Type': 'application/json'});
      return this.http.post(this.heroesUrl,JSON.stringify(hero),{headers:headers}).toPromise().then(
          response => response.json().data).catch(this.handleError);
  }

// Update existing Hero
  private put(hero: Hero) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.heroesUrl}/${hero.id}`;

    return this.http
        .put(url, JSON.stringify(hero), {headers: headers})
        .toPromise()
        .then(() => hero)
        .catch(this.handleError);
  }

  delete(hero: Hero) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.heroesUrl}/${hero.id}`;

    return this.http
        .delete(url, {headers: headers})
        .toPromise()
        .catch(this.handleError);
  }
  
  save(hero:Hero) {
    if(hero.id) {
      return this.put(hero);
    }
    return this.post(hero);
  }
  
  getHero(id:number) {
    return this.getHeroes().then(
        heroes => 
            heroes.find(
                hero => hero.id === id
            )
    );
  }
  // See the "Take it slow" appendix
  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(() => resolve(HEROES), 2000) // 2 seconds
    );
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/