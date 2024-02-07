import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Swal from "sweetalert2";
import * as AOS from 'aos'



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  constructor(private fb: FormBuilder) {

  }
  image: string = 'assets/contacto/hinchas.jpg'
  image2: string = 'assets/contacto/saluda.gif'
  group = this.fb.group({ from_name: ['', Validators.required], email_id: ['', [Validators.required, Validators.email]], message: ['', Validators.required] })

  get name() {
    return this.group.get('from_name')
  }
  get email() {
    return this.group.get('email_id')
  }
  get message() {
    return this.group.get("message")
  }
  ngOnInit(): void {
    AOS.init()
    window.addEventListener("load", AOS.refresh)
  }


  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_mbcz84h', 'template_q78zbit', e.target as HTMLFormElement, 'LXzfmdMKNU6SPWeox')
      .then((result: EmailJSResponseStatus) => {
        Swal.fire({
          icon: "success",
          title: "Tu mail ha sido enviado!",
        });
      }, (error) => {
        console.log(error.text);
      });

  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }


}
