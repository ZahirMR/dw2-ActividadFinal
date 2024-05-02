import { Component } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';
import { FormsModule } from '@angular/forms';



import {
  /* . . . */
  NgFor,
  NgIf,
  UpperCasePipe,
  /* . . . */
} from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
//cambiare el componente para que sea standalone e importar el NgFor
@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
    HeroDetailComponent
  ],
})
/*
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
  
})
*/
export class HeroesComponent {
  /*hero: Hero = {
   id: 1,
    name: 'Windstorm'
  };
  */
  heroes = HEROES;
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
}