import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ViandasList } from './viandas-list/viandas-list';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViandasshopAbout } from './viandasshop-about/viandasshop-about';
import { ViandasshopViandas } from './viandasshop-viandas/viandasshop-viandas';
import { Shopcart } from './shopcart/shopcart';
import { InputInteger } from './input-integer/input-integer';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SignUp } from './sign-up/sign-up';

@NgModule({
  declarations: [
    App,
    ViandasList,
    ViandasshopAbout,
    ViandasshopViandas,
    Shopcart,
    InputInteger,
    SignUp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
