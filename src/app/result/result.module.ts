import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results/results.component';
import { RouterModule, Routes } from '@angular/router';

const RESULT_ROUTES: Routes = [
  { path: 'results', component: ResultsComponent },
];

@NgModule({
  declarations: [ResultsComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(RESULT_ROUTES)
  ]
})
export class ResultModule { }
