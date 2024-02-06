import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'

@Component({
  selector: 'app-argentina',
  templateUrl: './argentina.component.html',
  styleUrls: ['./argentina.component.css']
})
export class ArgentinaComponent implements OnInit {

  ngOnInit(): void {
    AOS.init()
    window.addEventListener("load", AOS.refresh)
  }


}
