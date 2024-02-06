import { Component } from '@angular/core';

@Component({
  selector: 'app-primera-etapa',
  templateUrl: './primera-etapa.component.html',
  styleUrls: ['./primera-etapa.component.css']
})
export class PrimeraEtapaComponent {
  image1: string = 'assets/argentina/debut.jpg'
  image2: string = 'assets/argentina/alemania2006.jpg'
  image3: string = 'assets/argentina/jjoo.jpg'
  image4: string = 'assets/argentina/mundial2010.jpg'
  image5: string = 'assets/argentina/vsbrasil.jpg'
  image6: string = 'assets/argentina/holanda.jpg'
  image7: string = 'assets/argentina/en2016.jpg'
  image8: string = 'assets/argentina/rusia2018.jpg'
  image9: string = 'assets/argentina/afa.png'

  array = [{ src: this.image1, text: 'En 2005, el debut contra Hungria en un amistoso. ' }
    , { src: this.image2, text: "En Alemania 2006, su primer gol en un Mundial." },
  { src: this.image3, text: " En los Juegos Olímpicos 2008, allí obtuvo la medalla dorada." },
  { src: this.image4, text: "Sudáfrica 2010, único mundial en el que no convirtió goles." },
  { src: this.image5, text: "En 2012, en un amistoso en el que le hizo 3 goles a Brasil." },
  { src: this.image6, text: "En Brasil 2014 hizo 4 goles y llegó a la final contra Alemania." },
  { src: this.image7, text: "El 2016 fue un año de muchas emociones para Lionel Messi." },
  { src: this.image8, text: "Mundial de Rusia 2018, donde solo convirtió un gol." }]

}
