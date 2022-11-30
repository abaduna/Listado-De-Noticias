import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
@Output() parametrosSelecionados = new EventEmitter<any>()

  categorias: any[] = [
    { value: "general", nombre: "general" },
    { value: "business", nombre: "negocios" },

  ]
  paises: any = [
    { value: "ar", nombre: "Argentina" },
    { value: "br", nombre: "Brasil" }
  ]
  categoriaSelecionada = "general"
  paisSelecionada = "ar"
  constructor() { }

  ngOnInit(): void {
  }
  buscarNoticias() {
const PARAMETROS = {
  categoria:this.categoriaSelecionada,
  pais:this.paisSelecionada
}

this.parametrosSelecionados.emit(PARAMETROS)


  }
}
