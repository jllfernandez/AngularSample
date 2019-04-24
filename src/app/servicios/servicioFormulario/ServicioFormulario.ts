import { Injectable } from '@angular/core';

import {ContactModel} from '../../models/ContactModel';

@Injectable({
  providedIn: 'root'
})

export class ServicioFormulario {

  constructor() { }

  execute(_body: ContactModel){
    //getResponseEmail(_body: ContactForm): Observable<any>{
      // this.http.post('/send.php',_body).subscribe(data =>{
      //   console.log(data);
      //   this.type = JSON.stringify(data);
      // });
      //return this.http.post('/send.php',_body);
      console.log('ejecuto para --->' + _body.name);
      console.log('ejecuto para --->' + _body.email);
    }
}
