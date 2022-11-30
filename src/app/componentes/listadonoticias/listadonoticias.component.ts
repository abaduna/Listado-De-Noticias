import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listadonoticias',
  templateUrl: './listadonoticias.component.html',
  styleUrls: ['./listadonoticias.component.css']
})
export class ListadonoticiasComponent implements OnInit {
@Input() lisnoticias: any = []
  constructor() { }

  ngOnInit(): void {
  }

}
