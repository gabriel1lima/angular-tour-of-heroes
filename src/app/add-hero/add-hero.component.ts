import { Component, OnInit, Input } from "@angular/core";
import { HeroService } from "../hero.service";
import { Hero } from "../hero";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-hero",
  templateUrl: "./add-hero.component.html",
  styleUrls: ["./add-hero.component.css"]
})
export class AddHeroComponent implements OnInit {
  @Input() hero: Hero = { id: 0, name: "" };

  constructor(private heroService: HeroService, private router: Router) {}

  ngOnInit() {}

  addHero(): void {
    if (this.hero.name != "") {
      this.heroService.addHero(this.hero);
      this.router.navigate(["/heroes"]);
    } else {
      alert("Insira um nome!");
    }
  }
}
