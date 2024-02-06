import { Component } from '@angular/core';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.component.html',
  styleUrls: ['./familia.component.css']
})
export class FamiliaComponent {
  image: string = 'assets/familia/antonela.jpg'
  image2: string = 'assets/familia/conhijos.jpg'
  image3: string = 'assets/familia/conlacopa.jpg'
  image4: string = 'assets/familia/hijos.jpg'
  image5: string = 'assets/familia/diciembre.jpg'
  image6: string = 'assets/familia/cumple.jpg'

  texts = [{ text: "Con su esposa, Antonela Roccuzzo, el día de su boda. Ella ha sido siempre un pilar fundamental en la vida de Messi." },
  { text: "Lionel compartiendo tiempo con sus hijos Thiago, Mateo y Ciro y disfrutando de su tiempo en el hogar." },
  { text: "Leo y su familia disfrutando una jornada histórica tras obtener el Mundial de Qatar 2022 con la Selección Argentina." },
  { text: "Thiago, Mateo y Ciro juntos y unidos posando con los colores argentinos que su padre ama." },
  { text: "Lionel junto a su familia cerrando un gran año. La sonrisa de Leo refleja lo que disfruta estar con ellos." },
  { text: "Messi disfrutando de su cumpleaños número 36. Fue el primer 24 de junio como campeón del mundo. " }]

}
