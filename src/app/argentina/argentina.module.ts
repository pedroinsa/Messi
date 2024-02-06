import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArgentinaRoutingModule } from './argentina-routing.module';
import { ArgentinaComponent } from './components/argentina/argentina.component';
import { JuvenilComponent } from './components/juvenil/juvenil.component';
import { PrimeraEtapaComponent } from './components/primera-etapa/primera-etapa.component';
import { CardComponent } from './components/card/card.component';
import { SegundaEtapaComponent } from './components/segunda-etapa/segunda-etapa.component';
import { QatarComponent } from './components/qatar/qatar.component';
import { QatarCardComponent } from './components/qatar-card/qatar-card.component';


@NgModule({
  declarations: [
    ArgentinaComponent,
    JuvenilComponent,
    PrimeraEtapaComponent,
    CardComponent,
    SegundaEtapaComponent,
    QatarComponent,
    QatarCardComponent
  ],
  imports: [
    CommonModule,
    ArgentinaRoutingModule
  ]
})
export class ArgentinaModule { }
