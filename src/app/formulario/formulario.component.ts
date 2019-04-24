import { Component, OnInit } from '@angular/core';

//Models
import { ContactModel } from '../models/ContactModel';
//services en angular
import { ServicioFormulario } from '../servicios/servicioFormulario/ServicioFormulario';

//material desing de angular
import {MatSnackBar} from '@angular/material';
// Esta linea fue agregada automaticamente pueden borrarlo
import { NgForm } from '@angular/forms/src/directives/ng_form';

import swal from 'sweetalert2';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  contacto = new ContactModel();
  private titulo:string = "Crear Cliente"
  constructor(private miServicio: ServicioFormulario) { }
  //constructor(private sendServices: SendEmailService, public snackBar: MatSnackBar) { }

  ngOnInit() { 
  }

  onSubmit(f: NgForm){
    this.callService(this.contacto, f);
}
//metodo de services
callService(body:ContactModel, f: NgForm){
    
  /*
    this.sendServices.getResponseEmail(body).subscribe(
        data => {
            if(data){
                this.snackBar.open("Gracias por el mensaje", "Correcto", {
                    duration: 2000,
                  });
                  f.reset();
            }
            else{
                this.snackBar.open(":(", "Error", {
                    duration: 2000,
                  });
                  
            }
            
        },
        err => { this.snackBar.open("Algo fallo :/, correo: cesar@unprogramador.com", "ups", {
            duration: 5000,
          }); }
      );*/
      swal.fire("Good job!", "You clicked the button!", "success")
      this.miServicio.execute(body);
  
}

}
