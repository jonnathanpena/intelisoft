import { Component, OnInit } from '@angular/core';

import { DataPrecioProviders } from './dataPrecio.providers';

@Component({
  selector: 'app-dataPrecio',
  templateUrl: './dataPrecio.component.html',
  styleUrls: ['./dataPrecio.component.scss']
})
export class DataPrecioComponent implements OnInit {
  precios: any = [];

  constructor(
    private service: DataPrecioProviders
  ) {}

  ngOnInit() {
    this.service.getAll().subscribe(resp => {
      console.log('precios', resp.data);
      this.precios = resp.data;
    });
  }
}
