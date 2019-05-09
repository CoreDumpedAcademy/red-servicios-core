import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaRespuestasPage } from './lista-respuestas.page';

const routes: Routes = [
  {
    path: '',
    component: ListaRespuestasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaRespuestasPage]
})
export class ListaRespuestasPageModule {}
