import { Router } from '@angular/router';
import { Component, TemplateRef, OnInit } from '@angular/core';
import { NavegacionProvider } from './../providers/navegacion.provider';
import { OrdenProvider } from './orden.providers';
import { ClienteProvider } from './../providers/cliente.providers';
import { UsuarioProvider } from './../providers/usuario.providers';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-orden',
  templateUrl: 'orden.component.html',
  styleUrls: ['orden.component.css']
})

export class OrdenComponent implements OnInit {
  guardando: boolean;
  private alert: any = {
    tipo: '',
    texto: ''
  };
  orden: any = {
    ord_detalle_id: 0,
    cant_aretes_intdetord: 0,
    sub_total_intdetord: 0,
    iva_intdetord: 0,
    total_intdetord: 0,
    precio_detord_id: 0
  };
  costo: any = 0;
  guardado: boolean;

  constructor(
    private router: Router,
    private navegacion: NavegacionProvider,
    private service: OrdenProvider,
    public cliente: ClienteProvider,
    private usuario: UsuarioProvider) {}

  ngOnInit() {
    this.guardando = false;
    this.navegacion.setColumnas({
      izquierda: false,
      derecha: 'col-lg-10 col-md-10 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1'
    });
    console.log('cliente', this.cliente.cliente);
    console.log('usuario', this.usuario.usuario);
    this.service.insertOrden({
      cli_orden_id: this.cliente.cliente.id_intcliente,
      usuario_intord: this.usuario.usuario.id_intusuario
    }).subscribe(resp => {
      if (resp['_body'] !== 'false') {
        this.orden.ord_detalle_id = resp['_body'];
        this.insertLog(resp['_body'], 1);
      } else {
        this.alert.texto = '¡Ha ocurrido un error, por favor póngase en contacto con el administrador del sistema!';
        this.alert.tipo = 'error';
        notify(this.alert.texto, this.alert.tipo, 6000);
      }
    });
    this.service.gePrecio().subscribe(resp => {
      this.costo = resp.data[0].precio_intpre;
      this.orden.precio_detord_id = resp.data[0].id_intprecio;
    });
    this.guardado = false;
  }

  insertLog(orden, estatus) {
    const insertar = {
      orden_intlogs_ord: orden,
      estatus_intlogs_ord: estatus,
      usuario_intlogs_ord: this.usuario.usuario.id_intusuario
    };
    this.service.insertLogOrden(insertar).subscribe(resp => {
      if (resp['_body'] === 'false') {
        this.alert.texto = '¡Ha ocurrido un error, por favor póngase en contacto con el administrador del sistema!';
        this.alert.tipo = 'error';
        notify(this.alert.texto, this.alert.tipo, 6000);
      }
    });
  }

  cambiarEstatusOrden(orden, estatus) {
    this.service.updateEstatusOrden(
      {
        estatus_intord_id: estatus,
        id_intorden: orden
      }
    ).subscribe(resp => {
      if (resp['_body'] === 'false') {
        this.alert.texto = '¡Ha ocurrido un error, por favor póngase en contacto con el administrador del sistema!';
        this.alert.tipo = 'error';
        notify(this.alert.texto, this.alert.tipo, 6000);
      }
    });
  }

  guardar(e) {
    e.preventDefault();
    this.insertLog(this.orden.ord_detalle_id, 2);
    this.cambiarEstatusOrden(this.orden.ord_detalle_id, 2);
    this.service.insertDetalleOrdenCompra(this.orden).subscribe(resp => {
      if (resp['_body'] === 'true') {
        this.alert.texto = '¡Pedido exitoso, si presiona salir toda la información se borrará!';
        this.alert.tipo = 'success';
        notify(this.alert.texto, this.alert.tipo, 6000);
      } else {
        this.alert.texto = '¡Ha ocurrido un error, por favor póngase en contacto con el administrador del sistema!';
        this.alert.tipo = 'error';
        notify(this.alert.texto, this.alert.tipo, 6000);
      }
      this.guardado = true;
    });
  }

  cancelar() {
    this.insertLog(this.orden.ord_detalle_id, 4);
    this.cambiarEstatusOrden(this.orden.ord_detalle_id, 4);
    this.router.navigate(['/dashboard/consultar']);
  }

  atras() {
    this.router.navigate(['/dashboard/consultar']);
  }

  cambiarCantidadArete(e) {
    this.calcularTotal();
  }

  calcularTotal() {
    const cantidad = this.orden.cant_aretes_intdetord * 1;
    const precio = this.costo * 1;
    const comision = this.usuario.usuario.comision_intemp * 1;
    const subtotal = (cantidad * precio) + comision;
    const iva = subtotal * 12 / 100;
    const total = subtotal + iva;
    this.orden.sub_total_intdetord = subtotal.toFixed(2);
    this.orden.iva_intdetord = iva.toFixed(2);
    this.orden.total_intdetord = total.toFixed(2);
  }

}

