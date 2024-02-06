import { Component } from '@angular/core';

@Component({
  selector: 'app-qatar',
  templateUrl: './qatar.component.html',
  styleUrls: ['./qatar.component.css']
})
export class QatarComponent {
  image1: string = 'assets/argentina/arabia.jpg'
  image2: string = 'assets/argentina/mexico.jpg'
  image3: string = 'assets/argentina/polonia.jpg'
  image4: string = 'assets/argentina/australia.jpg'
  image5: string = 'assets/argentina/paisesbajos.jpg'
  image6: string = 'assets/argentina/croacia.jpg'
  image7: string = 'assets/argentina/francia.jpg'
  image8: string = 'assets/argentina/copa.jpg'
  image9: string = 'assets/argentina/afa.png'

  array = [{ src: this.image1, text: 'El debut frente Arabia Saudita y una sorpresiva derrota.' }
    , { src: this.image2, text: "Contra México hubo alegrías. Triunfo y golazo de Messi." },
  { src: this.image3, text: " Tercer partido ante Polonia en el cierre de la fase de grupos." },
  { src: this.image4, text: "Octavos de final contra Australia y otra gran actuación." },
  { src: this.image5, text: "Ante Paises Bajos fue un partido caliente de muchos desahogos." },
  { src: this.image6, text: "Semifinal frente a Croacia. Triunfo categórico con gol de Messi." },
  { src: this.image7, text: "En la final Messi brilló y fue decisivo para el triunfo argentino." },
  { src: this.image8, text: "Messi con la Copa del mundo que siempre anhelo. Sueño cumplido." }]

}
