import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const heroes = [
      { age: 25, des: 'Un éclair de génie, ce cheval !', id: 11, name: 'Petit Tonnerre' },
      { age: 30, des: "Etalon noir appartenant au célèbre justicier masqué Zorro ", id: 12, name: 'Tornado' },
      { age: 27, des: 'Fille du centaure Chiron et de Chariclo', id: 13, name: 'Ocyrhoé' },
      { age: 19, des: 'Cheval immortel doué de parole', id: 14, name: 'Arion' },
      { age: 20, des: "Cheval aux reflets roux", id: 15, name: 'Sleipnir' },
      { age: 22, des: 'Mi cheval et mi aigle', id: 16, name: 'Hipogriffe' },
      { age: 36, des: 'Cheval avec une magnifique crinière', id: 17, name: 'Pégase' },
      { age: 33, des: 'Cheval doux comme une fleur', id: 18, name: "Bouton d'or" },
      { age: 17, des: 'Cheval ailé dans la mythologie turque', id: 19, name: 'Tulpar' },
      { age: 21, des: 'Etalon qui parcourt 1000 lieues par jour', id: 20, name: 'Santos' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  
  constructor() { }
}
