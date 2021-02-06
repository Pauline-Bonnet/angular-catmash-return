import { Component, OnInit } from '@angular/core';
import { Cat } from '../models/models';
import { CatsService } from '../services/cats-service.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  cats: Cat[]

  constructor(private service: CatsService) { }

  ngOnInit(): void {
    this.cats = this.service.catsTab;
    this.cats.sort((a: Cat, b: Cat) => b.points - a.points)
    // console.log('result', this.cats)
  }

}
