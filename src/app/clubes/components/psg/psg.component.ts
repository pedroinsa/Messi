import { Component } from '@angular/core';

@Component({
  selector: 'app-psg',
  templateUrl: './psg.component.html',
  styleUrls: ['./psg.component.css']
})
export class PsgComponent {
  image1: string = 'assets/clubes/psg1.jpg'
  image2: string = 'assets/clubes/psg2.jpg'
  image3: string = 'assets/clubes/psg3.jpg'
  image4: string = 'assets/clubes/psg4.jpg'
  image5: string = 'assets/clubes/psg.png'
  image6: string = 'assets/clubes/psg5.jpg'
  image7: string = 'assets/clubes/psg6.jpg'

  texts = [{ text: "En junio 2021 llegó al conjunto francés con grandes expectativas." },
  { text: "En su primer año obtuvo el título de la Ligue 1." },
  { text: "En su segunda temporada repitió la conquista teniendo mayor participación." },
  { text: "Si bien su gran objetivo era la Champions League no pudo lograrla." },
  { text: "Disputó 74 partidos con la camiseta del PSG, marcando 32 goles." },
  { text: "Se despidió a mediados del 2023 para buscar nuevos objetivos." }

  ]

}
