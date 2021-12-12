import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AppRouterModule } from './app-router.module';
import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';

//Change app locale
import  localeES  from '@angular/common/locales/es-AR';
import  localeIT  from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeES);
registerLocaleData(localeIT)

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule, BrowserModule, AppRouterModule, SalesModule, SharedModule],
  providers: [{provide: LOCALE_ID, useValue: 'es-AR'}],
  bootstrap: [AppComponent],
})
export class AppModule {}
