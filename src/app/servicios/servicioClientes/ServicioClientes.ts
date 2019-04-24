import { Injectable } from '@angular/core';
import { Cliente } from '../../models/Cliente';
import { Observable } from 'rxjs'; 
import { ServicioHttp } from '../common/ServicioHttp';



@Injectable({
  providedIn: 'root'
})

export class ServicioClientes {
    private urlEndPoint: string = 'http://localhost:8080/api/clientes';
    constructor(private servicioHttp: ServicioHttp) { }
  
    getClientes(): Observable<Cliente[]> {
      return this.servicioHttp.getClientes();
    }
  
  }