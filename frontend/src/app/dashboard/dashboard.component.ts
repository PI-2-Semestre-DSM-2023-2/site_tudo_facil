import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  planos: any = [];

  assinaturas: any = [];

  usuario: any = {};

  format = format;

  parseISO = parseISO;

  constructor(private router: Router, private http: HttpClient) {
    if (!localStorage.getItem('token')) {
      this.router.navigateByUrl('/sys-tf/login');
    } else {
      this.usuario = JSON.parse(localStorage.getItem('usuario') as string);
      this.getPlanos();
      this.getAssinaturas();
    }
  }

  getPlanos() {
    this.http
      .get(`${process.env['API_HOST']}/planos`)
      .subscribe((planos: any) => {
        planos.forEach((plano: any) => {
          plano.niveisPlanos.sort((a: any, b: any) => {
            return a.valor < b.valor ? -1 : 1;
          });
        });
        this.planos = planos;
      });
  }

  getAssinaturas() {
    this.http
      .get(`${process.env['API_HOST']}/assinaturas/usuario/${this.usuario.id}`)
      .subscribe((assinaturas: any) => {
        this.assinaturas = assinaturas;
      });
  }

  cancelarAssinatura(assinatura: any) {
    assinatura.ativa = false;

    if(confirm("Tem certeza de que deseja cancelar a assinatura?")) {
      this.http
      .put(`${process.env['API_HOST']}/assinaturas`, assinatura)
      .subscribe({
        next: () => {
          window.location.reload();
        },
        error: (err) => {
          console.log(err)
        }
      });
    }
    
  }
}
