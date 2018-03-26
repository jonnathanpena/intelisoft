import { Component, OnInit } from '@angular/core';
import { DataClienteProviders } from './dataCliente.providers';

@Component({
  selector: 'app-dataCliente',
  templateUrl: './dataCliente.component.html',
  styleUrls: ['./dataCliente.component.scss']
})

export class DataClienteComponent implements OnInit {
  clientes: any = [];
  ci: any;

  constructor(
    private service: DataClienteProviders
  ) {}

  ngOnInit() {
    this.service.getAll().subscribe(resp => {
      this.clientes = resp.data;
    });
    this.ci = '';
  }

  consultarCI(e) {
    this.clientes = [];
    if (e.value === '') {
      this.ngOnInit();
    } else {
      this.getByCi();
    }
  }

  getByCi() {
    this.service.getByCi({ci: this.ci}).subscribe(resp => {
      const cliente = JSON.parse(resp['_body']);
      this.clientes = cliente.data;
    });
  }
}
