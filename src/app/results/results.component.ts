import { Component, OnInit } from '@angular/core';
import { Cat } from '../models/models';
import { CatsService } from '../services/cats-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  cats: Cat[];
  podium: Cat[];
  notPodium: Cat[][] = [];

  constructor(private service: CatsService,
              private router: Router) { }

  ngOnInit(): void {
    this.cats = this.service.init();
    this.cats.sort((a: Cat, b: Cat) => b.points - a.points);
    this.podium = this.cats.slice(0,3);
    this.divide(this.cats.slice(3));
  }

  /**
   * divide() is a function that allows us to visually structure the display of cats in results
   * @param cats
   * @param nbRow optionnal number that defines the number of cats on row
   * TODO Add button on the interface which allows to choose the number of cats by row, using nbRow
   */
  divide(cats: Cat[], nbRow = 4): void {
    let tab: Cat[] = [];
    cats.forEach((cat, index) => {
      ++ index;
      tab.push(cat);
      if (index % nbRow === 0 && tab.length === nbRow) {
        this.notPodium.push(tab);
        tab = [];
      }
    });
    this.notPodium.push(tab);
  }

  goBack(): void {
    this.router.navigate(['votes']);
  }
}
