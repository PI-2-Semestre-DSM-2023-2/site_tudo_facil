import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  usuario: any;

  nome = new FormControl('');
  email = new FormControl('');

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {
    this.usuario = JSON.parse(localStorage.getItem('usuario') as string);

    if (this.usuario) {
      this.http
        .get(
          `${process.env['API_HOST']}/usuarios/${this.usuario.id}`
        )
        .subscribe({
          next: (usuario: any) => {
            this.nome.setValue(usuario.nome);
            this.email.setValue(usuario.email);
          },
          error: (err: HttpErrorResponse) => {
            if (err.status === 401) {
              alert(err.error.message);
            }
          },
        });
    }
  }

  cadastrarUsuario(e: any) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formEntries = Object.fromEntries(formData.entries()) as any;

    if (formEntries.senha === formEntries.confirmacao_senha) {
      formEntries.tipo = 'Cliente';
      delete formEntries.confirmacao_senha;

      if (this.usuario) {
        formEntries.id = this.usuario.id;

        this.http
          .put(
            `${process.env['API_HOST']}/usuarios`,
            formEntries
          )
          .subscribe({
            next: (usuario: any) => {
              localStorage.setItem('usuario', JSON.stringify(usuario));
              alert('Usuário alterado!');
              this.router.navigateByUrl('/sys-tf/dashboard');
            },
            error: (err: HttpErrorResponse) => {
              if (err.status === 400) {
                alert(err.error.message);
              } else {
                console.log(err);
              }
            },
          });
      } else {
        this.http
          .post(
            `${process.env['API_HOST']}/usuarios`,
            formEntries
          )
          .subscribe({
            next: (usuario: any) => {
              alert('Usuário criado!');
              this.router.navigateByUrl('/sys-tf/dashboard');
            },
            error: (err: HttpErrorResponse) => {
              if (err.status === 400) {
                alert(err.error.message);
              } else {
                console.log(err);
              }
            },
          });
      }
    } else {
      alert('A confirmação de senha não confere!');
    }
  }
}
