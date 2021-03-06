import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsModule } from './cats/cats.module';
import { CatsService } from './services/cats-service.service';
import { ResultModule } from './result/result.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CatsModule,
    ResultModule
  ],
  providers: [CatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
