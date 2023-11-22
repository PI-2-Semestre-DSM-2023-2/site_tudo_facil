import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
})
export class SubscriptionComponent {
  niveis: any = [];

  usuario: any = {};

  constructor(private router: Router, private http: HttpClient) {
    if (!localStorage.getItem('token')) {
      this.router.navigateByUrl('/sys-tf/login');
    } else {
      this.getNiveis();
      this.usuario = JSON.parse(localStorage.getItem('usuario') as string);
    }
  }

  irParaDashboard() {
    this.router.navigateByUrl('/sys-tf/dashboard');
  }

  realizarAssinatura(e: any) {
    const nowDate = new Date();
    e.preventDefault();

    const formData = new FormData(e.target);
    const formEntries = Object.fromEntries(formData.entries()) as any;

    formEntries.usuario_id = this.usuario.id;
    formEntries.data_inicio = parseISO(
      format(nowDate, 'yyyy-MM-dd')
    ).toISOString();
    nowDate.setDate(nowDate.getDate() + 29);
    formEntries.data_fim = parseISO(
      format(nowDate, 'yyyy-MM-dd')
    ).toISOString();

    this.http
      .post(
        `${process.env['API_HOST']}/assinaturas`,
        formEntries
      )
      .subscribe({
        next: (assinatura: any) => {
          alert('Assinatura realizada com sucesso!');
          this.router.navigateByUrl('/sys-tf/dashboard');
        },
      });
  }

  getNiveis() {
    this.http
      .get(`${process.env['API_HOST']}/planos/niveis`)
      .subscribe((niveis: any) => {
        this.niveis = niveis;
      });
  }
}
