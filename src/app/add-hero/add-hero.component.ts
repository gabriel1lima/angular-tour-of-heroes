import { Component, OnInit, Input } from "@angular/core";
import { HeroService } from "../hero.service";
import { Hero } from "../hero";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-add-hero",
  templateUrl: "./add-hero.component.html",
  styleUrls: ["./add-hero.component.css"]
})
export class AddHeroComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {}

  addHero(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  goBack(): void {
    this.location.back();
  }
}
