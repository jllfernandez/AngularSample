import { Injectable } from '@angular/core';
import { HIJOS } from '../../servicioClientes/hijos.json';
import { CLIENTES } from '../../servicioClientes/clientes.json';
import { BROTHERS } from '../../servicioClientes/brothers.json';
import { Father } from '../../../models/Father';
import { Cliente } from '../../../models/Cliente';
//import { ContactModel } from '../../../models/ContactModel';
import { Observable } from 'rxjs'; 
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

//import { of } from 'rxjs/observable/of';
//import { of } from 'rxjs';
//import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private urlEndPoint: string = '';//'http://localhost:8080/api/clientes';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  //constructor() { }
  constructor(private http: HttpClient) { }

  getListado(): Observable<Father[]> {
    return of(HIJOS);
    /*return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Cliente[])
    );*/
  }

  getBrothers(): Observable<Father[]> {
    return of(BROTHERS);
    /*return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Cliente[])
    );*/
  }

  create(novo: Father) : Observable<Father> {
    console.log('Estoy creando ...' + (<Cliente>novo).nombre);
    console.log('Estoy creando ...' + (<Cliente>novo).email);
   return of(CLIENTES[0]);
    //return this.http.post<Father>(this.urlEndPoint, cliente, {headers: this.httpHeaders})
  }

  update(novo: Father): Observable<Cliente>{
    console.log('Estoy actualizando ...' + (<Cliente>novo).nombre);
    console.log('Estoy actualizando ...' + (<Cliente>novo).email);
   return of(CLIENTES[0]);
  }

  delete(id: number): Observable<Cliente>{
    console.log('Estoy borrando ...' + id);
   return of(CLIENTES[0]);
  }


  /*
  getCliente(id): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`)
  }

  create(cliente: Cliente) : Observable<Cliente> {
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders})
  }
  
  update(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }*/

}
