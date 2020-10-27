import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo: any;
  constructor() {
    this.correo = {
      titulo: "Titulo del Email",
      cuerpo: "Dolore voluptate cillum duis veniam dolore ipsum dolor irure laborum pariatur enim aliquip nostrud",
      emisor: "correoEmisor@cifpfbmoll.eu",
      destinatario: "correoReceptor@cifpfbmoll.eu"
    }
   }

  ngOnInit(): void {
  }

}
