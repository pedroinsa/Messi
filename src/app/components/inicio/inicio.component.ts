import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  image: string = 'assets/inicio/copadelmundo.jpg'
  image2: string = 'assets/inicio/iniciomessi.jpg'

  ngOnInit(): void {
    AOS.init()
    window.addEventListener("load", AOS.refresh)
  }

}
