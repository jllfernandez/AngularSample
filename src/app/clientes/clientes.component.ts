import { Component, OnInit } from '@angular/core';

import { Cliente } from '../models/Cliente';
import { ServicioClientes } from '../servicios/servicioClientes/ServicioClientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ServicioClientes) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
   );

  }

}
