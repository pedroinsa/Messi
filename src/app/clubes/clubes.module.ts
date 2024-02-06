import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubesRoutingModule } from './clubes-routing.module';
import { ClubesComponent } from './components/clubes/clubes.component';
import { NewellsComponent } from './components/newells/newells.component';
import { BarcelonaComponent } from './components/barcelona/barcelona.component';
import { CardBarcaComponent } from './components/card-barca/card-barca.component';
import { PsgComponent } from './components/psg/psg.component';
import { CardPsgComponent } from './components/card-psg/card-psg.component';
import { InterComponent } from './components/inter/inter.component';


@NgModule({
  declarations: [
    ClubesComponent,
    NewellsComponent,
    BarcelonaComponent,
    CardBarcaComponent,
    PsgComponent,
    CardPsgComponent,
    InterComponent
  ],
  imports: [
    CommonModule,
    ClubesRoutingModule
  ]
})
export class ClubesModule { }
