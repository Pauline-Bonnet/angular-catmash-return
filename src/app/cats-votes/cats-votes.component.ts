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
      tap((data: Cat[]) => this.cats = data)
    ).subscribe();
    this.service.emitCats();
    this.onSelectionCat();
  }

  ngOnDestroy(): void {
    this.catsSubcription.unsubscribe();
  }

  onSelectionCat() {
    [this.firstCat, this.secondCat] = this.service.generateRandomCat(this.firstCat, this.secondCat);
  }

  /**
   * TODO: block the navigation if there are not at least 10 votes
   * (with modal that says: 'Add votes to access results')
   */
  showResults(): void {
    this.router.navigate(['results']);
  }

  /**
   * CAUTION, this function clears the storage and suppress all the points
   * TODO: add confirmation modal : 'You're about to suppress all your votes,
   *       are you sure you want to continue?'
   */
  reinitVotes() {
    this.service.clearStorage();
  }
}
