import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatComponent } from './cat/cat.component';
import { CatsVotesComponent } from './cats-votes/cats-votes.component';
import { RouterModule, Routes } from '@angular/router';

const CATS_ROUTES: Routes = [
  { path: 'votes', component: CatsVotesComponent },
  { path: '', redirectTo: 'votes', pathMatch: 'full' },
];

@NgModule({
  declarations: [CatsVotesComponent, CatComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(CATS_ROUTES)
  ]
})
export class CatsModule { }
