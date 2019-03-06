import { Component, OnInit, Input } from "@angular/core";
import { Hero } from "../hero";

import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";

import { HeroService } from "../hero.service";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
  }

  deleteHero(hero: Hero): void {
    this.heroService.deleteHero(hero);
    this.router.navigate(["/heroes"]);
  }

  goBack(): void {
    this.location.back();
  }
}
