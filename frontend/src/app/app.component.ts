import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pi2_dsm';
  local = localStorage;
  constructor(public router: Router) {}

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    window.location.reload();
  }
}
