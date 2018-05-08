import { Component, OnInit } from '@angular/core';
import { EntregaProviders } from './entrega.providers';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.scss']
})
export class EntregaComponent implements OnInit {
  entregas: any = [];

  constructor(private service: EntregaProviders) {}

  ngOnInit() {
    this.service.getAll().subscribe(resp => {
      this.entregas = resp.data;
    });
  }

}
