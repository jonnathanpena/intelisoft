import { CrearComponent } from './crear/crear.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { DatePipe } from '@angular/common';

import { TranslationsModule } from './translation/translation.module';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

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

import {
          DxButtonModule,
          DxFormModule,
          DxFormComponent,
          DxTextBoxModule,
          DxValidatorModule
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
    BrowserModule,
    HttpClientModule,
    HttpModule,
    TranslationsModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
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
    NavegacionProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
