import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private http: HttpClient) {
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('/sys-tf/dashboard');
    }
  }

  login(e: any) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formEntries = Object.fromEntries(formData.entries()) as any;

    this.http
      .post(
        `${process.env['API_HOST']}/usuarios/login`,
        formEntries
      )
      .subscribe({
        next: (login: any) => {
          delete login.usuario.senha;

          localStorage.setItem('usuario', JSON.stringify(login.usuario));
          localStorage.setItem('token', login.token);
          this.router.navigateByUrl('/sys-tf/dashboard');
        },
        error: (err: HttpErrorResponse) => {
          if (err.status === 401) {
            alert(err.error.message);
          }
        },
      });
  }
}
