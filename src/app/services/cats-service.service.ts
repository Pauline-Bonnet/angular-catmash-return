import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cat } from '../models/models';
import { data } from './../../assets/data/data';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  images: any[];
  catsTab: Cat[];
  score: number;
  catsSubject = new Subject<Cat[]>();

  constructor() {
    this.images = data;
    this.clear();
  }

  emitCats() {
    this.catsSubject.next(this.catsTab);
  }

  generateRandomCat(firstCat: Cat, secondCat: Cat): Cat[] {
    const randomCats = [
      this.catsTab[Math.floor(Math.random() * this.catsTab.length)],
      this.catsTab[Math.floor(Math.random() * this.catsTab.length)]
    ];

    if (randomCats[0] === randomCats[1] || randomCats[0] === firstCat || randomCats[1] === secondCat) {
      return this.generateRandomCat(firstCat, secondCat);
    }
    return randomCats;
  }

  incrementCount(cat: Cat): number {
    return this.score = ++cat.points;
  }

  /**
   * init() is a function that allows us to initialize the cats array from the localStorage (so, with points) or
   * to have array with no points associated to cats
   */
  init(): Cat[] {
    const storage = localStorage.getItem('cats');
    if (storage !== null) {
      this.catsTab = JSON.parse(storage);
    }
    return this.catsTab;
  }

  clear() {
    this.catsTab = [];
    this.images.forEach(image => this.catsTab.push( {...image, points: 0} ));
  }

  clearStorage() {
    localStorage.removeItem('cats');
    this.clear();
  }
}
