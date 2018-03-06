import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';
import { AgmCoreModule } from '@agm/core';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { SharedModule } from './shared/shared.module';

import { ULRProvider } from './providers/url.providers';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import {  DxCheckBoxModule,
          DxSelectBoxModule,
          DxNumberBoxModule,
          DxButtonModule,
          DxFormModule,
          DxFormComponent,
          DxTextBoxModule,
          DxValidatorModule,
          DxDataGridModule,
          DxTreeListModule,
          DxSwitchModule,
          DxDateBoxModule,
          DxTabsModule,
          DxLoadIndicatorModule,
          DxTemplateModule,
          DxLookupModule,
          DxTagBoxModule,
          DxScrollViewComponent,
          DxScrollViewModule,
          DxPivotGridModule
        } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent
  ],
  imports: [
    DxCheckBoxModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
    DxButtonModule,
    DxFormModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxDataGridModule,
    DxSwitchModule,
    DxTreeListModule,
    DxDateBoxModule,
    DxTabsModule,
    DxLoadIndicatorModule,
    DxTemplateModule,
    DxLookupModule,
    DxTagBoxModule,
    DxScrollViewModule,
    DxPivotGridModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpClientModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    NgbModule.forRoot(),
    SidebarModule.forRoot(),
    AgmCoreModule.forRoot({apiKey: 'YOURAPIKEY'})
  ],
  providers: [
    ULRProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
