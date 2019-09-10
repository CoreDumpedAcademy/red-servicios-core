import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToForos() {
    this.router.navigateByUrl('lista-foros');
  }

  goToNevera() {
    this.router.navigateByUrl('nevera');
  }

}
