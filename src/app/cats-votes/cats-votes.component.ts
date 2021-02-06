import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Cat } from '../models/models';
import { CatsService } from '../services/cats-service.service';

@Component({
  selector: 'app-cats-votes',
  templateUrl: './cats-votes.component.html',
  styleUrls: ['./cats-votes.component.scss']
})
export class CatsVotesComponent implements OnInit {

  cats: Cat[];
  firstCat: Cat;
  secondCat: Cat;
  catsSubcription: Subscription;

  constructor(private router: Router,
              private service: CatsService) { }

  ngOnInit(): void {
    this.catsSubcription = this.service.catsSubject.pipe(
      tap((data: any) => {
        this.cats = data;
      })
    ).subscribe();
    this.service.emitCats();
    this.onSelectionCat()
  }

  ngOnDestroy(): void {
    this.catsSubcription.unsubscribe();
  }

  onSelectionCat() {
    this.firstCat = this.service.generateRandomCat();
    this.secondCat = this.service.generateRandomCat();
    while (this.secondCat === this.firstCat) {
      this.secondCat = this.service.generateRandomCat();
    }
  }

  showResults(): void {
    this.router.navigate(['results']);
  }
}
