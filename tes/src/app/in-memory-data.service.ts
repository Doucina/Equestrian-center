import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      { age: 25, pelage:"Alezane (crins marron/roux)", des: 'Un éclair de génie, ce cheval !', id: 11, name: 'Petit Tonnerre' },
      { age: 30, pelage:'Crins et corps noir', des: "Etalon noir appartenant au célèbre justicier masqué Zorro ", id: 12, name: 'Tornado' },
      { age: 27, pelage:"Gris", des: 'Fille du centaure Chiron et de Chariclo', id: 13, name: 'Ocyrhoé' },
      { age: 19, pelage:"Pie (crins blancs ou bicolores avec de grandes taches noires)", des: 'Cheval immortel doué de parole', id: 14, name: 'Arion' },
      { age: 20, pelage:"Alezan brûlé (Le corps et les crins sont marrons foncés avec reflets roux)", des: "Cheval aux reflets roux", id: 15, name: 'Sleipnir' },
      { age: 22, pelage:"Bai (crins noirs, corps marron et extrémités des membres noires)", des: 'Mi cheval et mi aigle', id: 16, name: 'Hipogriffe' },
      { age: 36, pelage:"Blanc bleuté", des: 'Cheval avec une magnifique crinière', id: 17, name: 'Pégase' },
      { age: 33, pelage:"Pie (crins blancs ou bicolores, corps blanc avec de grandes taches noires, baies ou alezanes)", des: 'Cheval doux comme une fleur', id: 18, name: "Bouton d'or" },
      { age: 17, pelage:"Alezane (crins marron/roux)", des: 'Cheval ailé dans la mythologie turque', id: 19, name: 'Tulpar' },
      { age: 21, pelage:"Gris souris (corps gris et extrémités des membres noires)", des: 'Etalon qui parcourt 1000 lieues par jour', id: 20, name: 'Santos' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  
  constructor() { }
}
