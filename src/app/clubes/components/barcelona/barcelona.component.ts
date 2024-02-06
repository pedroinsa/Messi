import { Component } from '@angular/core';

@Component({
  selector: 'app-barcelona',
  templateUrl: './barcelona.component.html',
  styleUrls: ['./barcelona.component.css']
})
export class BarcelonaComponent {

  image1: string = 'assets/clubes/barca1.jpeg'
  image2: string = 'assets/clubes/barca2.jpg'
  image3: string = 'assets/clubes/barca3.jpg'
  image4: string = 'assets/clubes/barca4.jpg'
  image5: string = 'assets/clubes/barca5.jpeg'
  image6: string = 'assets/clubes/barca6.jpg'
  image7: string = 'assets/clubes/barca.png'

  texts = [{ text: "Los primeros pasos en el club como profesional." }, { text: "Festejo en la final de la Champions 2009 ante Manchester United." },
  { text: "Tras coronarse en Wembley en 2011 en una final vibrante." }, { text: "En 2015, en una nueva obtención de la orejona en Berlin ante Juventus." },
  { text: "Festejo emblemático contra el Real Madrid en el Bernabeu." }, { text: "Temporada 20/21, la ultima como jugador del club catalán." }]
}
