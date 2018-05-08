import { Component, OnInit } from '@angular/core';
import { DespachoProviders } from './despacho.providers';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-despacho',
  templateUrl: './despacho.component.html',
  styleUrls: ['./despacho.component.scss']
})
export class DespachoComponent implements OnInit {
  despachos: any = [];

  constructor(private service: DespachoProviders) {}

  ngOnInit() {
    this.service.getAll().subscribe(resp => {
      this.despachos = resp.data;
    });
  }
}
