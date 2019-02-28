import { Component, OnInit, Input } from '@angular/core';
import { HeroService }  from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {
  
  @Input() hero: Hero = {id: 0, name: ""};

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

  addHero(): void {
    this.heroService.addHero(this.hero)
  }
}
