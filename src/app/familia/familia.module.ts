import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamiliaRoutingModule } from './familia-routing.module';
import { FamiliaComponent } from './components/familia/familia.component';
import { CardComponent } from './components/card/card.component';
import { VideoUnoComponent } from './components/video-uno/video-uno.component';
import { VideoDosComponent } from './components/video-dos/video-dos.component';


@NgModule({
  declarations: [
    FamiliaComponent,
    CardComponent,
    VideoUnoComponent,
    VideoDosComponent
  ],
  imports: [
    CommonModule,
    FamiliaRoutingModule
  ]
})
export class FamiliaModule { }
