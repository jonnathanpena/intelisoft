import { CrearComponent } from './crear/crear.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslationsModule } from './translation/translation.module';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { OrdenComponent } from './orden/orden.component';
import { EntregaComponent } from './entrega/entrega.component';

import { NavegacionProvider } from './providers/navegacion.provider';
import { ULRProvider } from './providers/url.providers';
import { ClienteProvider } from './providers/cliente.providers';
import { LoginProvider } from './login/login.providers';
import { UsuarioProvider } from './providers/usuario.providers';
import { DashboardProvider } from './dashboard/dashboard.providers';
import { ConsultarProvider } from './consultar/consultar.providers';
import { CrearProvider } from './crear/crear.providers';
import { OrdenProvider } from './orden/orden.providers';
import { EntregaProvider } from './entrega/entrega.providers';

import { ModalModule } from 'ngx-bootstrap/modal';

import {
          DxButtonModule,
          DxFormModule,
          DxFormComponent,
          DxTextBoxModule,
          DxValidatorModule,
          DxSelectBoxModule,
          DxCheckBoxModule
        } from 'devextreme-angular';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ConsultarComponent,
    CrearComponent,
    OrdenComponent,
    EntregaComponent
  ],
  imports: [
    DxButtonModule,
    DxFormModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxCheckBoxModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    TranslationsModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    DxSelectBoxModule,
    CommonModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
    })
  ],
  providers: [
    DatePipe,
    NavegacionProvider,
    ULRProvider,
    ClienteProvider,
    LoginProvider,
    UsuarioProvider,
    DashboardProvider,
    ConsultarProvider,
    CrearProvider,
    OrdenProvider,
    EntregaProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
