import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-insignia',
  templateUrl: './insignia.component.html',
  styleUrls: ['./insignia.component.scss'],
})
export class InsigniaComponent implements OnInit {

  constructor(private popover: PopoverController, private nav: NavParams) { }

  data: {
    descripcion: string,
    nombre: string,
    conseguida: any,
    imagen: string,
    gif: string
  };
  changed = false;

  ngOnInit() {
    this.data = this.nav.data.data;
    moment.locale('es');
    console.log(Date.parse(this.data.conseguida));
    if (!(Date.parse(this.data.conseguida) > 0)) {
      this.data.conseguida = moment(this.data.conseguida).format('D [de] MMMM [de] YYYY ');
      this.changed = true;
    }
  }

}
