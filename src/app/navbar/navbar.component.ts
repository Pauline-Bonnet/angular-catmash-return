import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CatsService } from '../services/cats-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private service: CatsService,
    private router: Router) {}

  reinitVotes() {
    this.service.clearStorage();
    this.router.navigate(['results'])
    .then(() => {
      window.location.reload();
    });
  }
}
