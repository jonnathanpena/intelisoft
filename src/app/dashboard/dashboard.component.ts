import { Router } from '@angular/router';
import { Component, TemplateRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  cedula: any;

  constructor() {}

  ngOnInit() {
    this.cedula = '';
  }
}
