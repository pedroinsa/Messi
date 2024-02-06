import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-psg',
  templateUrl: './card-psg.component.html',
  styleUrls: ['./card-psg.component.css']
})
export class CardPsgComponent {
  @Input() src?: string
  @Input() text?: string


}
