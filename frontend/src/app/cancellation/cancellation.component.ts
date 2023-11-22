import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.css']
})
export class CancellationComponent {

  constructor(private router: Router) { }

  irParaDashboard(){
    this.router.navigateByUrl('/sys-tf/dashboard');
  }
  
}
