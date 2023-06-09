import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  enviarEmail(nome: string, email: string,
    motivo: string, mensagem: string) {

    const mail = "mailto:contato@tudofacil.com.br?cc=" + email
      + "&subject=" + motivo + " - " + nome
      + "&body=" + mensagem;

    window.open(encodeURI(mail), '_blank');
  }
}
