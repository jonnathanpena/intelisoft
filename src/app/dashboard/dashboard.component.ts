import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';
import { colorSets  } from '@swimlane/ngx-charts/release/utils/color-sets';
import {
  single,
  generateData
} from '../shared/chartData';
import { DashboardProviders } from './dashboard.providers';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  cantidadUsuariosPV: any;
  cantidadImpresoras: any;
  cantidadBones: any;
  cantidadClientes: any;
  provincias: any = [];
  single: any[];
  graph: {
    links: any[],
    nodes: any[]
  };
  dateData: any[];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  tooltipDisabled = false;
  xAxisLabel = 'Provincia';
  showYAxisLabel = false;
  yAxisLabel = 'Ventas Por Provincia';
  showGridLines = true;
  roundDomains = false;
  colorScheme = {
    domain: [
    '#0099cc', '#2ECC71', '#4cc3d9', '#ffc65d', '#d96557', '#ba68c8'
    ]
  };
  schemeType = 'ordinal';
  // line interpolation
  curve = shape.curveLinear;
  // line, area
  timeline = false;
  // margin
  margin = false;
  marginTop = 40;
  marginRight = 40;
  marginBottom = 40;
  marginLeft = 40;
  // gauge
  gaugeMin = 0;
  gaugeMax = 50;
  gaugeLargeSegments = 10;
  gaugeSmallSegments = 5;
  gaugeTextValue = '';
  gaugeUnits = 'alerts';
  gaugeAngleSpan = 240;
  gaugeStartAngle = -120;
  gaugeShowAxis = true;
  gaugeValue = 50; // linear gauge value
  gaugePreviousValue = 70;

  constructor(private service: DashboardProviders) {
    Object.assign(this, {
      single
    });
    this.dateData = generateData(5, false);
    console.log('data grafica', this.dateData);
  }

  ngOnInit() {
    this.service.getUsuarios().subscribe(resp => {
      this.cantidadUsuariosPV = resp.data[0].cantidad;
    });
    this.service.getImpresoras().subscribe(resp => {
      this.cantidadImpresoras = resp.data[0].cantidad;
    });
    this.service.getBones().subscribe( resp => {
      this.cantidadBones = resp.data[0].cantidad;
    });
    this.service.getClientes().subscribe(resp => {
      this.cantidadClientes = resp.data[0].cantidad;
    });
    this.service.getAllProvincias().subscribe( resp => {
      this.provincias = resp.data;
    });
    this.service.getGraficaInit().subscribe(resp => {
      this.dateData = resp.data;
    });
  }

  select(data) {
    console.log('Item clicked', data);
  }

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }
}
