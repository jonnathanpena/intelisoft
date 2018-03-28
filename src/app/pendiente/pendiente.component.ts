import { Component, OnInit } from '@angular/core';
import { PendienteProviders } from './pendiente.providers';

@Component({
  selector: 'app-pendiente',
  templateUrl: './pendiente.component.html',
  styleUrls: ['./pendiente.component.scss']
})
export class PendienteComponent implements OnInit{
  pendientes: any = [];

  constructor(
    private service: PendienteProviders
  ) {}

  ngOnInit() {
    this.service.getAll().subscribe(resp => {
      this.pendientes = resp.data;
    });
  }

}
