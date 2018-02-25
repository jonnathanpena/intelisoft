import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: '/',
    name: 'HOME',
    type: 'link',
    icon: 'basic-accelerator'
  },
  {
    state: 'punto-venta',
    name: 'Puntos de Venta',
    type: 'sub',
    icon: 'basic-display',
    children: [
      {
        state: 'crear-usuario-pv',
        name: 'Nuevo Usuario PV'
      },
      {
        state: 'listar-usuario-pv',
        name: 'Listar Usuarios PV'
      },
      {
        state: 'precio-arete',
        name: 'Precio Arete'
      }
    ]
  },
  {
    state: 'cuenta-pichincha',
    name: 'Cuenta Pichincha',
    type: 'sub',
    icon: 'ecommerce-banknotes',
    children:[
      {
        state: 'formulario-pago',
        name: 'Formulario de Pago'
      },
      {
        state: 'listar-pagos',
        name: 'Listar Pagos'
      }
    ]
  },
  {
    state: 'envio-impresora',
    name: 'Envío Impresora',
    type: 'sub',
    icon: 'basic-printer',
    children: [
      {
        state: 'impresora',
        name: 'Impresora'
      },
      {
        state: 'zebra',
        name: 'Zebra'
      },
      {
        state: 'grabadora',
        name: 'Grabadora'
      }
    ]
  },
  {
    state: 'envio-bones',
    name: 'Envío Bones',
    type: 'link',
    icon: 'basic-archive-full'
  },
  {
    state: 'data-cliente',
    name: 'Data Cliente',
    type: 'link',
    icon: 'basic-server2'
  },
  {
    state: 'data-precio',
    name: 'Data Precio',
    type: 'link',
    icon: 'ecommerce-banknote'
  },
  {
    state: 'despacho',
    name: 'Despacho a PV',
    type: 'link',
    icon: 'ecommerce-basket-download'
  },
  {
    state: 'entrega',
    name: 'Entrega en PV',
    type: 'link',
    icon: 'ecommerce-basket-check'
  },
  {
    state: 'pendiente',
    name: 'Pendiente de Pago',
    type: 'link',
    icon: 'ecommerce-basket-remove'
  },
  {
    state: '',
    name: 'Cerrar Sesión',
    type: 'link',
    icon: 'arrows-square-remove'
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu: Menu) {
    MENUITEMS.push(menu);
  }
}
