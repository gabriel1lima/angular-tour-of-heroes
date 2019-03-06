import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root"
})
export class HeroService {
<<<<<<< HEAD
  HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
  ];

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(this.HEROES);
=======
  id = 13;

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add("HeroService: fetched heroes");
    return of(HEROES);
>>>>>>> 302c9dfd87e3a06323bb7b8f3563578f1af9bace
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(this.HEROES.find(hero => hero.id === id));
  }

  deleteHero(hero: Hero) {
    HEROES.splice(HEROES.indexOf(hero), 1);
  }

  addHero(hero: Hero) {
<<<<<<< HEAD
    this.HEROES.push(hero)
=======
    hero.id = this.id;
    this.id++;
    HEROES.push(hero);
>>>>>>> 302c9dfd87e3a06323bb7b8f3563578f1af9bace
  }

  constructor(private messageService: MessageService) {}
}
