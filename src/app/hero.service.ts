import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
  ];

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(this.HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(this.HEROES.find(hero => hero.id === id));
  }

  addHero(hero: Hero) {
    this.HEROES.push(hero)
  }

  constructor(private messageService: MessageService) { }
}
