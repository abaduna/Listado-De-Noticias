import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ListadonoticiasComponent } from './componentes/listadonoticias/listadonoticias.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SpinerComponent } from './shered/spiner/spiner.component';
import {HttpClientModule  } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListadonoticiasComponent,
    NavbarComponent,
    SpinerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
