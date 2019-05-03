import { Injectable } from '@angular/core';
import { HIJOS } from '../../servicioClientes/hijos.json';
import { CLIENTES } from '../../servicioClientes/clientes.json';
import { CLIENTES_PAGINADOS } from '../../servicioClientes/clientes_paginados.json';
import { USUARIOS_PAGINADOS } from '../../../models/usuarios_paginados.json';
import { BROTHERS } from '../../servicioClientes/brothers.json';
import { Father } from '../../../models/Father';
import { Cliente } from '../../../models/Cliente';
//import { ContactModel } from '../../../models/ContactModel';
import { Observable } from 'rxjs'; 
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private urlEndPoint: string = '';//'http://localhost:8080/api/clientes';

  //private httpHeaders = new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'})

  private header = new HttpHeaders().set('Access-Control-Allow-Origin','*')
      .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json; charset=utf-8');
      //.set('Authorization', localStorage.getItem("Token_Full").toString())
      //.set('Authorization', 'Bearer ' + localStorage.getItem("Token_Full").toString());
   
  

  //constructor() { }
  constructor(private http: HttpClient) { }

  getListadoPaginado(): Observable<any> {
    return of(CLIENTES_PAGINADOS);
    /*return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Cliente[])
    );*/
  }

  getUsuariosPaginados(url:string): Observable<any> {
    
    return this.http.get<any>(url, { headers: this.header}).pipe(
      map(response => response as any));
  }

  getListado(): Observable<Father[]> {
    return of(HIJOS);
  }

  getConsulta(url:string): Observable<any> {
    return this.http.get(url, { headers: this.header}).pipe(
      map(response => response as any));
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
