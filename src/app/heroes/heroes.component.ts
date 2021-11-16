import { Component, OnInit } from '@angular/core';
// import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero?: Hero;

  constructor(private heroService :HeroService) { }
  onSelect(hero: Hero):void{
    this.selectedHero = hero;
    console.log("selected hero is ", hero);
  }

  getHeroes():void{
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}