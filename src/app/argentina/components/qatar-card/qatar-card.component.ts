import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qatar-card',
  templateUrl: './qatar-card.component.html',
  styleUrls: ['./qatar-card.component.css']
})
export class QatarCardComponent {
  @Input() src?: string;
  @Input() text?: string;

}
