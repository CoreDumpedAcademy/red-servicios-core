import { PopoverController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Respuesta } from 'src/app/interfaces/respuesta';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(private Popover: PopoverController, private navParams: NavParams) { }

  data: Respuesta;
  answer: boolean;

  ngOnInit() {
    this.data = this.navParams.data.data;
    if (this.navParams.data.data !== '') {
      if (this.data.text.length > 50) {
        this.data.text = this.data.text.slice(0, 50);
        this.data.text += '...';
        this.answer = true;
      }
    } else {
      this.answer = false;
    }
  }

}
