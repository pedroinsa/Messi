import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-barca',
  templateUrl: './card-barca.component.html',
  styleUrls: ['./card-barca.component.css']
})
export class CardBarcaComponent {
  @Input() src?: string
  @Input() text?: string

}
