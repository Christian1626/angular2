import { Hero } from './hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from './hero.service';
import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  @Input() hero: Hero;
  @Output() close = new EventEmitter();
  error: any;
  sub: any;
  navigated = false; // true if navigated here
  
  constructor(
      private heroService: HeroService,
      private route: ActivatedRoute) {
  }
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if(params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.heroService.getHero(id).then(hero=>this.hero = hero);
      } else {
        this.navigated = false;
        this.hero = new Hero();
      }
    })
  }
  
  save() {
    this.heroService.save(this.hero).then(hero => {
      //this.hero = hero;
      this.goBack(hero);
    }).catch(error => this.error = error);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack(savedHero: Hero = null) {
    this.close.emit(savedHero);
    if (this.navigated) { window.history.back(); }
  }
  
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/