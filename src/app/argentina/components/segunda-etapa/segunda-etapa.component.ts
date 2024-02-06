import { Component } from '@angular/core';

@Component({
  selector: 'app-segunda-etapa',
  templateUrl: './segunda-etapa.component.html',
  styleUrls: ['./segunda-etapa.component.css']
})
export class SegundaEtapaComponent {
  image1: string = 'assets/argentina/copaamerica2.jpg'
  image2: string = 'assets/argentina/copaamerica.jpg'
  image3: string = 'assets/argentina/finalisima.jpg'
  image4: string = 'assets/argentina/finalisima2.jpg'

  image5: string = 'assets/argentina/afa.png'

  array = [{ src: this.image1, text: 'Tras conseguir su primer título con la selección en la Copa América 2021.' }
    , { src: this.image2, text: "La consagración fue en el mismísimo Maracaná ante Brasil tras derrotarlo 1-0." },
  { src: this.image3, text: "Frente a Italia en Wembley en la Finalissima. Segundo título para Messi." },
  { src: this.image4, text: "La finalissima. Messi nuevamente viviendo un momento feliz en la selección." },
  ]

}


