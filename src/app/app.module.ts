import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsVotesComponent } from './cats-votes/cats-votes.component';
import { CatComponent } from './cat/cat.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsVotesComponent,
    CatComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
