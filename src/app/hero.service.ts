import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {

  private heroesFetched: boolean = false;

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    if (!this.heroesFetched) {
      this.messageService.add('Moto Encontrada');
      this.heroesFetched = true;
    }
    const heroes = of(HEROES);
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // Por ahora, supongamos que siempre existe un heroe con el `id` especificado.
    // El manejo de errores se agregara en el siguiente paso del tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`Moto seleccionada: ${hero.name}`);
    return of(hero);
 }
}
