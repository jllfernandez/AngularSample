import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import  { HttpService } from '../servicios/common/connection/http.service';
//import { ServicioHttp } from '../../common/ServicioHttp';
//import { HttpService } from '../common/connection/http.service';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private urlEndPoint: string = 'http://192.168.4.114:8082/api/usuarios';
    
    constructor(private servicioHttp: HttpService) { }
    
    getUsuariosPaginados(page: number): Observable<any> {
      return <Observable<any>>this.servicioHttp.getUsuariosPaginados(this.urlEndPoint);
    }
}
