import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatsVotesComponent } from './cats-votes/cats-votes.component';
import { ResultsComponent } from './results/results.component';


const routes: Routes = [
  { path: 'votes', component: CatsVotesComponent },
  { path: 'results', component: ResultsComponent },
  { path: '', redirectTo: 'votes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
